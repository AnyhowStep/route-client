import * as rd from "route-declaration";
import {SendResult, ISender} from "../sender";
import {HttpStatusCodeNon2xx} from "../http-status-code";
import {Non2xxDelegateMap, Non2xxDelegate} from "../non-2xx";
import {
    setParam, SetParam,
    SetQuery, setQuery,
    SetBody, setBody,
    SetHeader, setHeader,
    AssertHttpStatusCodeNon2xx,
    On, on,
    SetOnTransformBody, setOnTransformBody,
    SetOnInjectHeader, setOnInjectHeader,
    SetOnTransformResponse, setOnTransformResponse,
    DeepMergeOnInjectHeader, deepMergeOnInjectHeader,
    AssertCanSend, send,
} from "./operation";
import {AssertCanGetPath, getPath, SendResultOf} from "./query";

export interface TransformBodyDelegate<DataT extends RequestData> {
    //May return a Promise<>
    (
        body : rd.RouteUtil.ServerBody<DataT["route"]>,
        //Copy-paste of `SendableRequestData<DataT>`
        //to make generated .d.ts file easier to read
        req : {
            readonly route  : DataT["route"];
            readonly sender : DataT["sender"];

            readonly param  : rd.RouteUtil.ClientExpectedParam<DataT["route"]>;
            readonly query  : rd.RouteUtil.ClientExpectedQuery<DataT["route"]>;
            readonly body   : rd.RouteUtil.ClientExpectedBody<DataT["route"]>;
            readonly header : rd.RouteUtil.ClientExpectedHeader<DataT["route"]>;
        }
    ) : unknown;
}
export interface InjectHeaderDelegate<DataT extends RequestData> {
    //May return a Promise<>
    (
        //Copy-paste of `SendableRequestData<DataT>`
        //to make generated .d.ts file easier to read
        req : {
            readonly route  : DataT["route"];
            readonly sender : DataT["sender"];

            readonly param  : rd.RouteUtil.ClientExpectedParam<DataT["route"]>;
            readonly query  : rd.RouteUtil.ClientExpectedQuery<DataT["route"]>;
            readonly body   : rd.RouteUtil.ClientExpectedBody<DataT["route"]>;
            readonly header : rd.RouteUtil.ClientExpectedHeader<DataT["route"]>;
        }
    ) : (
        | { [k : string] : unknown }
        | Promise<{ [k : string] : unknown }>
    );
}
export interface TransformResponseDelegate<DataT extends RequestData> {
    //May return a Promise<>
    (
        sendResult : SendResult,
        //Copy-paste of `SendableRequestData<DataT>`
        //to make generated .d.ts file easier to read
        req : {
            readonly route  : DataT["route"];
            readonly sender : DataT["sender"];

            readonly param  : rd.RouteUtil.ClientExpectedParam<DataT["route"]>;
            readonly query  : rd.RouteUtil.ClientExpectedQuery<DataT["route"]>;
            readonly body   : rd.RouteUtil.ClientExpectedBody<DataT["route"]>;
            readonly header : rd.RouteUtil.ClientExpectedHeader<DataT["route"]>;
        }
    ) : (
        | rd.RouteUtil.ServerMappableResponse<DataT["route"]>
        | Promise<rd.RouteUtil.ServerMappableResponse<DataT["route"]>>
    );
}

export interface SendableRequestData<DataT extends Pick<RequestData, "route"|"sender">> {
    readonly route  : DataT["route"];
    readonly sender : DataT["sender"];

    readonly param  : rd.RouteUtil.ClientExpectedParam<DataT["route"]>;
    readonly query  : rd.RouteUtil.ClientExpectedQuery<DataT["route"]>;
    readonly body   : rd.RouteUtil.ClientExpectedBody<DataT["route"]>;
    readonly header : rd.RouteUtil.ClientExpectedHeader<DataT["route"]>;
}

export interface RequestData {
    readonly route  : rd.RouteData;
    readonly sender : ISender;

    readonly param  : unknown;
    readonly query  : unknown;
    readonly body   : unknown;
    readonly header : unknown;

    readonly non2xxDelegates : Non2xxDelegateMap;

    /**
        Called before sending the request
    */
    readonly onTransformBody : undefined|TransformBodyDelegate<any>;
    /**
        Called before sending the request
    */
    readonly onInjectHeader : undefined|InjectHeaderDelegate<any>;
    /**
        Only called with 2xx results
    */
    readonly onTransformResponse : undefined|TransformResponseDelegate<any>;
}
export class Request<DataT extends RequestData> {
    readonly route  : DataT["route"];
    readonly sender : DataT["sender"];

    readonly param  : DataT["param"];
    readonly query  : DataT["query"];
    readonly body   : DataT["body"];
    readonly header : DataT["header"];

    readonly non2xxDelegates : DataT["non2xxDelegates"];

    /**
        Called before sending the request
    */
    readonly onTransformBody : DataT["onTransformBody"];
    /**
         Called before sending the request
    */
    readonly onInjectHeader : DataT["onInjectHeader"];
    /**
         Only called with 2xx results
    */
    readonly onTransformResponse : DataT["onTransformResponse"];

    constructor (data : DataT) {
        this.route  = data.route;
        this.sender = data.sender;
        this.param  = data.param;
        this.query  = data.query;
        this.body   = data.body;
        this.header = data.header;
        this.non2xxDelegates = data.non2xxDelegates;

        this.onTransformBody = data.onTransformBody;
        this.onInjectHeader  = data.onInjectHeader;
        this.onTransformResponse = data.onTransformResponse;
    }

    setParam<
        ParamT extends rd.RouteUtil.ClientExpectedParam<DataT["route"]>
    > (
        this : (
            rd.RouteUtil.ClientExpectedParam<DataT["route"]> extends never ?
            ["This route has no param"] :
            this
        ),
        param : ParamT
    ) : Request<SetParam<DataT, ParamT>> {
        return new Request(setParam(this as this, param));
    }

    setQuery<
        QueryT extends rd.RouteUtil.ClientExpectedQuery<DataT["route"]>
    > (
        this : (
            rd.RouteUtil.ClientExpectedQuery<DataT["route"]> extends never ?
            ["This route has no query"] :
            this
        ),
        param : QueryT
    ) : Request<SetQuery<DataT, QueryT>> {
        return new Request(setQuery(this as this, param));
    }

    setBody<
        BodyT extends rd.RouteUtil.ClientExpectedBody<DataT["route"]>
    > (
        this : (
            rd.RouteUtil.ClientExpectedBody<DataT["route"]> extends never ?
            ["This route has no body"] :
            this
        ),
        param : BodyT
    ) : Request<SetBody<DataT, BodyT>> {
        return new Request(setBody(this as this, param));
    }

    setHeader<
        HeaderT extends rd.RouteUtil.ClientExpectedHeader<DataT["route"]>
    > (
        this : (
            rd.RouteUtil.ClientExpectedHeader<DataT["route"]> extends never ?
            ["This route has no header"] :
            this
        ),
        param : HeaderT
    ) : Request<SetHeader<DataT, HeaderT>> {
        return new Request(setHeader(this as this, param));
    }

    on<
        StatusT extends HttpStatusCodeNon2xx,
        DelegateT extends Non2xxDelegate
    > (
        status : AssertHttpStatusCodeNon2xx<StatusT>,
        delegate : DelegateT
    ) : Request<On<DataT, StatusT, DelegateT>> {
        return new Request(on(this, status as StatusT, delegate));
    }

    setOnTransformBody<OnTransformBodyT extends TransformBodyDelegate<DataT>> (
        onTransformBody : OnTransformBodyT
    ) : Request<SetOnTransformBody<DataT, OnTransformBodyT>> {
        return new Request(
            setOnTransformBody<DataT, OnTransformBodyT>(this as unknown as DataT, onTransformBody)
        );
    }
    setOnInjectHeader<OnInjectHeaderT extends InjectHeaderDelegate<DataT>> (
        onInjectHeader : OnInjectHeaderT
    ) : Request<SetOnInjectHeader<DataT, OnInjectHeaderT>> {
        return new Request(
            setOnInjectHeader<DataT, OnInjectHeaderT>(this as unknown as DataT, onInjectHeader)
        );
    }
    setOnTransformResponse<OnTransformResponseT extends TransformResponseDelegate<DataT>> (
        onTransformResponse : OnTransformResponseT
    ) : Request<SetOnTransformResponse<DataT, OnTransformResponseT>> {
        return new Request(
            setOnTransformResponse<DataT, OnTransformResponseT>(this as unknown as DataT, onTransformResponse)
        );
    }
    deepMergeOnInjectHeader<OnInjectHeaderT extends InjectHeaderDelegate<DataT>> (
        onInjectHeader : OnInjectHeaderT
    ) : Request<DeepMergeOnInjectHeader<DataT, OnInjectHeaderT>> {
        return new Request(
            deepMergeOnInjectHeader<DataT, OnInjectHeaderT>(this as unknown as DataT, onInjectHeader)
        );
    }

    getPath (
        this : AssertCanGetPath<this>
    ) : string {
        return getPath(this as this);
    }

    send (
        this : AssertCanSend<this>
    ) : Promise<SendResultOf<DataT>> {
        return send(this as this);
    }
}

export type NewRequest<RouteT extends rd.RouteData, SenderT extends ISender> = (
    Request<{
        readonly route : RouteT;
        readonly sender : SenderT;

        readonly param  : undefined;
        readonly query  : undefined;
        readonly body   : undefined;
        readonly header : undefined;

        readonly non2xxDelegates : {};

        readonly onTransformBody : undefined;
        readonly onInjectHeader : undefined;
        readonly onTransformResponse : undefined;
    }>
);

export function request<RouteT extends rd.RouteData, SenderT extends ISender> (
    route : rd.RouteUtil.AssertValid<RouteT>,
    sender : SenderT
) : NewRequest<RouteT, SenderT> {
    rd.RouteUtil.assertValid(route as RouteT);
    return new Request({
        route : route as RouteT,
        sender,

        param  : undefined,
        query  : undefined,
        body   : undefined,
        header : undefined,

        non2xxDelegates : {},

        onTransformBody : undefined,
        onInjectHeader : undefined,
        onTransformResponse : undefined,
    })
}
/*
import * as tm from "type-mapping";
import {AxiosSender} from "../axios-sender";
const r = rd.route()
    .append("/v1/charges")
    .appendParam("chargeId")
    .setParam(tm.object({
        chargeId : tm.mysql.varChar(),
    }))
    .setResponse(tm.object({
        chargeId : tm.mysql.bigIntUnsigned(),
        date : tm.mysql.dateTime(3),
    }));
const x = request(r, null as any as AxiosSender)
    //*
    .setParam({
        chargeId : "test"
    })
    //* /
    .on(404, () => {
        return {
            msg : "Not found",
        }
    })
    .on(304, () => {
        return {
            notModified : true
        } as const
    })
    .on(500, () => {
        return {
            internalError : true
        } as const
    })
    .on(501, () => {
        return {
            internalError501 : true
        } as const
    })
    .send();

const noParam = rd.route()
    .setResponse(tm.object({
        chargeId : tm.mysql.bigIntUnsigned(),
        date : tm.mysql.dateTime(3),
    }));
const y = request(noParam)
    .setParam(1)
declare const sro : SendResultOf<{
    route : typeof r,
    non2xxDelegates : {
        400 : () => Promise<{ message : "You messed up" }>,
        //[HttpStatusCodeNon2xx.CLIENT_CLOSED_REQUEST] : () => Promise<{ message : "You messed up" }>
    },
    param : undefined,
    query : undefined,
    body : undefined,
    header : undefined,
}>;
//*/