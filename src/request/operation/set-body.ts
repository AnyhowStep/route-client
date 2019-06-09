import * as rd from "route-declaration";
import {RequestData} from "../request";

export type SetBody<
    DataT extends RequestData,
    BodyT extends rd.RouteUtil.ClientExpectedBody<DataT["route"]>
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["param"];
        readonly query  : DataT["query"];
        readonly body   : BodyT;
        readonly header : DataT["header"];

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setBody<
    DataT extends RequestData,
    BodyT extends rd.RouteUtil.ClientExpectedBody<DataT["route"]>
> (
    data : DataT,
    body : BodyT
) : SetBody<DataT, BodyT> {
    return {
        ...data,
        body,
    };
}