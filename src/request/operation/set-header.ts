import * as rd from "route-declaration";
import {RequestData} from "../request";

export type SetHeader<
    DataT extends RequestData,
    HeaderT extends rd.RouteUtil.ClientExpectedHeader<DataT["route"]>
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["header"];
        readonly query  : DataT["query"];
        readonly body   : DataT["body"];
        readonly header : HeaderT;

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setHeader<
    DataT extends RequestData,
    HeaderT extends rd.RouteUtil.ClientExpectedHeader<DataT["route"]>
> (
    data : DataT,
    header : HeaderT
) : SetHeader<DataT, HeaderT> {
    return {
        ...data,
        header,
    };
}