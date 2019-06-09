import {RequestData, InjectHeaderDelegate} from "../request";

export type SetOnInjectHeader<
    DataT extends RequestData,
    OnInjectHeaderT extends InjectHeaderDelegate<DataT>
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
        readonly onInjectHeader : OnInjectHeaderT;
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function setOnInjectHeader<
    DataT extends RequestData,
    OnInjectHeaderT extends InjectHeaderDelegate<DataT>
> (
    data : DataT,
    onInjectHeader : OnInjectHeaderT
) : SetOnInjectHeader<DataT, OnInjectHeaderT> {
    return {
        ...data,
        onInjectHeader,
    };
}