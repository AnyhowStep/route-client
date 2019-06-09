import {RequestData, InjectHeaderDelegate, SendableRequestData} from "../request";

export type DeepMergeOnInjectHeader<
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
        readonly onInjectHeader : (
            DataT["onInjectHeader"] extends InjectHeaderDelegate<any> ?
            (req : SendableRequestData<DataT>) => (
                & ReturnType<DataT["onInjectHeader"]>
                & ReturnType<OnInjectHeaderT>
            ) :
            OnInjectHeaderT
        );
        readonly onTransformResponse : DataT["onTransformResponse"];
    }
);
export function deepMergeOnInjectHeader<
    DataT extends RequestData,
    OnInjectHeaderT extends InjectHeaderDelegate<DataT>
> (
    data : DataT,
    onInjectHeader : OnInjectHeaderT
) : DeepMergeOnInjectHeader<DataT, OnInjectHeaderT> {
    const prvOnInjectHeader = data.onInjectHeader;
    return {
        ...data,
        onInjectHeader : (
            prvOnInjectHeader == undefined ?
            onInjectHeader :
            (req : SendableRequestData<DataT>) => {
                const prv = prvOnInjectHeader(req);
                const cur = onInjectHeader(req);
                return {
                    ...prv,
                    ...cur,
                };
            }
        ) as any,
    };
}