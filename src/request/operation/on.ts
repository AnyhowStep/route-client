import {RequestData} from "../request";
import {HttpStatusCodeNon2xx, isHttpStatusCodeNon2xx} from "../../http-status-code";
import {Non2xxDelegate, Non2xxUtil} from "../../non-2xx";

export type On<
    DataT extends RequestData,
    StatusT extends HttpStatusCodeNon2xx,
    DelegateT extends Non2xxDelegate
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["param"];
        readonly query  : DataT["query"];
        readonly body   : DataT["body"];
        readonly header : DataT["header"];

        readonly non2xxDelegates : Non2xxUtil.SetDelegate<DataT["non2xxDelegates"], StatusT, DelegateT>;

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export type AssertHttpStatusCodeNon2xx<StatusT extends HttpStatusCodeNon2xx> = (
    Extract<HttpStatusCodeNon2xx, StatusT> extends never ?
    [StatusT, "is not a valid non-2xx http status code"] :
    StatusT
);
export function on<
    DataT extends RequestData,
    StatusT extends HttpStatusCodeNon2xx,
    DelegateT extends Non2xxDelegate
> (
    data : DataT,
    status : StatusT,
    delegate : DelegateT
) : On<DataT, StatusT, DelegateT> {
    if (!isHttpStatusCodeNon2xx(status)) {
        throw new Error(`${status} is not a valid non-2xx http status code`);
    }
    return {
        ...data,
        non2xxDelegates : Non2xxUtil.setDelegate(
            data.non2xxDelegates as DataT["non2xxDelegates"],
            status,
            delegate
        ),
    };
}