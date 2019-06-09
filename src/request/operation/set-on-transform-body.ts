import {RequestData, TransformBodyDelegate} from "../request";

export type SetOnTransformBody<
    DataT extends RequestData,
    OnTransformBodyT extends TransformBodyDelegate<DataT>|undefined
> = (
    {
        readonly route  : DataT["route"];
        readonly sender : DataT["sender"];

        readonly param  : DataT["param"];
        readonly query  : DataT["query"];
        readonly body   : DataT["body"];
        readonly header : DataT["header"];

        readonly non2xxDelegates : DataT["non2xxDelegates"];

        readonly onTransformBody : OnTransformBodyT;
        readonly onInjectHeader : DataT["onInjectHeader"];
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setOnTransformBody<
    DataT extends RequestData,
    OnTransformBodyT extends TransformBodyDelegate<DataT>|undefined
> (
    data : DataT,
    onTransformBody : OnTransformBodyT
) : SetOnTransformBody<DataT, OnTransformBodyT> {
    return {
        ...data,
        onTransformBody,
    };
}