import * as rd from "route-declaration";
import {RequestData} from "../request";

export type SetQuery<
    DataT extends RequestData,
    QueryT extends rd.RouteUtil.ClientExpectedQuery<DataT["route"]>
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["param"];
        readonly query  : QueryT;
        readonly body   : DataT["body"];
        readonly header : DataT["header"];

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setQuery<
    DataT extends RequestData,
    QueryT extends rd.RouteUtil.ClientExpectedQuery<DataT["route"]>
> (
    data : DataT,
    query : QueryT
) : SetQuery<DataT, QueryT> {
    return {
        ...data,
        query,
    };
}