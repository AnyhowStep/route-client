import {RequestData, TransformResponseDelegate} from "../request";

export type SetOnTransformResponse<
    DataT extends RequestData,
    OnTransformResponseT extends TransformResponseDelegate<DataT>|undefined
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["param"];
        readonly query  : DataT["query"];
        readonly body   : DataT["body"];
        readonly header : DataT["header"];

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : DataT["onTransformBody"];
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : OnTransformResponseT;
    }
);
export function setOnTransformResponse<
    DataT extends RequestData,
    OnTransformResponseT extends TransformResponseDelegate<DataT>|undefined
> (
    data : DataT,
    onTransformResponse : OnTransformResponseT
) : SetOnTransformResponse<DataT, OnTransformResponseT> {
    return {
        ...data,
        onTransformResponse,
    };
}