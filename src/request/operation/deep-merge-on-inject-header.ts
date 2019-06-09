import {RequestData, InjectHeaderDelegate, SendableRequestData} from "../request";
import * as rd from "route-declaration";
import {SyncReturnType} from "../../sync-return-type";

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
            DataT["onInjectHeader"] extends (...args : any[]) => any ?
            Extract<
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
                ) => (
                    Promise<
                        & SyncReturnType<DataT["onInjectHeader"]>
                        & SyncReturnType<OnInjectHeaderT>
                    >
                ),
                InjectHeaderDelegate<DataT>
            > :
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
            async (req : SendableRequestData<DataT>) => {
                const prv = await prvOnInjectHeader(req);
                const cur = await onInjectHeader(req);
                return {
                    ...prv,
                    ...cur,
                };
            }
        ) as any,
    };
}