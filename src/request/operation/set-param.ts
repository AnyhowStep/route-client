import * as rd from "route-declaration";
import {RequestData} from "../request";

export type SetParam<
    DataT extends RequestData,
    ParamT extends rd.RouteUtil.ClientExpectedParam<DataT["route"]>
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : ParamT;
        readonly query  : DataT["query"];
        readonly body   : DataT["body"];
        readonly header : DataT["header"];

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setParam<
    DataT extends RequestData,
    ParamT extends rd.RouteUtil.ClientExpectedParam<DataT["route"]>
> (
    data : DataT,
    param : ParamT
) : SetParam<DataT, ParamT> {
    return {
        ...data,
        param,
    };
}