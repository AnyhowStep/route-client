import * as rd from "route-declaration";
import {RequestData} from "../request";
import {SendResultOf, getPath} from "../query";
import {SendConfig} from "../../sender";
import {isHttpStatusCode2xx, HttpStatusCodeNon2xx} from "../../http-status-code";

export type MissingSetCalls<DataT extends RequestData> = (
    | (
        rd.RouteUtil.ClientExpectedParam<DataT["route"]> extends never ?
        never :
        DataT["param"] extends rd.RouteUtil.ClientExpectedParam<DataT["route"]> ?
        never :
        ".setParam()"
    )
    | (
        rd.RouteUtil.ClientExpectedQuery<DataT["route"]> extends never ?
        never :
        DataT["query"] extends rd.RouteUtil.ClientExpectedQuery<DataT["route"]> ?
        never :
        ".setQuery()"
    )
    | (
        rd.RouteUtil.ClientExpectedBody<DataT["route"]> extends never ?
        never :
        DataT["body"] extends rd.RouteUtil.ClientExpectedBody<DataT["route"]> ?
        never :
        ".setBody()"
    )
    | (
        rd.RouteUtil.ClientExpectedHeader<DataT["route"]> extends never ?
        never :
        DataT["header"] extends rd.RouteUtil.ClientExpectedHeader<DataT["route"]> ?
        never :
        ".setHeader()"
    )
);
export type AssertCanSend<DataT extends RequestData> = (
    & DataT
    & (
        MissingSetCalls<DataT> extends never ?
        unknown :
        ["Cannot .send(); call", MissingSetCalls<DataT>, "first"]
    )
);
export async function send<DataT extends RequestData> (data : DataT) : Promise<SendResultOf<DataT>> {
    const method = rd.RouteUtil.getMethod(data.route);
    const path = getPath(data);

    let debugName = `${method} ${path}`;

    const query = (data.route.query == undefined) ?
        undefined :
        data.route.query(`${debugName} : query`, data.query);

    if (query != undefined) {
        debugName += `?${JSON.stringify(query)}`;
    }

    const rawBody = (data.route.body == undefined) ?
        undefined :
        data.route.body(`${debugName} : body`, data.body);

    const body = (data.onTransformBody == undefined) ?
        rawBody :
        await data.onTransformBody(rawBody, data);

    //Headers are special
    const injectedHeader = (data.onInjectHeader == undefined) ?
        {} :
        await data.onInjectHeader(data);
    const header = (data.route.header == undefined) ?
        injectedHeader :
        {
            //Injected headers are applied first,
            //and may be over-written
            ...injectedHeader,
            //There may be extra header values given
            //that are not asserted
            ...data.header,
            //This assert delegate possibly modifies the values
            //of the header
            ...data.route.header(
                `${debugName} : header`,
                data.header
            ),
        };

    const sendConfig : SendConfig = {
        method,
        path,
        query,
        body,
        header,
    };
    return data.sender.send(sendConfig)
        .then(async (sendResult) : Promise<any> => {
            if (isHttpStatusCode2xx(sendResult.status)) {
                if (data.route.response == undefined) {
                    return {
                        ...sendResult,
                        responseBody : undefined,
                    };
                }

                try {
                    const rawResponseBody = (data.onTransformResponse == undefined) ?
                        sendResult.responseBody :
                        await data.onTransformResponse(sendResult, data);
                    const responseBody = data.route.response(
                        `${debugName} : response`,
                        rawResponseBody
                    );
                    return {
                        ...sendResult,
                        responseBody,
                    };
                } catch (err) {
                    if (err != undefined) {
                        err.sendResult = sendResult;
                    }
                    throw err;
                }
            } else {
                const non2xxDelegate = data.non2xxDelegates[sendResult.status as HttpStatusCodeNon2xx];
                if (non2xxDelegate == undefined) {
                    const err = new Error(`Unhandled HTTP status code ${sendResult.status}, ${sendResult.statusText}, ${sendResult.code}`);
                    (err as any).sendResult = sendResult;
                    const sendResultErrStack : string = (
                        sendResult.err instanceof Object &&
                        typeof (sendResult.err as any).stack == "string"
                    ) ?
                        (sendResult.err as any).stack :
                        "";
                    if (err.stack == undefined) {
                        err.stack = sendResultErrStack;
                    } else {
                        if (sendResultErrStack.length > 0) {
                            err.stack += "\n==Inner Stack==\n" + sendResultErrStack;
                        }
                    }
                    throw err;
                }

                const responseBody = await non2xxDelegate(sendResult);
                return {
                    ...sendResult,
                    responseBody,
                };
            }
        })
        .catch((err) => {
            if (err != undefined) {
                (err as any).requestData = data;
                (err as any).sendConfig = sendConfig;
            }
            throw err;
        });
}