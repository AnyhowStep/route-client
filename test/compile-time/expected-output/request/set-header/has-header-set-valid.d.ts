import * as tm from "type-mapping";
import * as client from "../../../../../dist";
export declare const req: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: tm.Mapper<unknown, {
            gadgetId: bigint;
        }> & tm.ExpectedInput<{
            gadgetId: bigint;
        }> & tm.MappableInput<{
            gadgetId: string | number | bigint;
        }>;
        readonly response: undefined;
    }>;
    readonly sender: client.ISender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: {
        gadgetId: bigint;
    };
    readonly non2xxDelegates: {};
    readonly onTransformBody: undefined;
    readonly onInjectHeader: undefined;
    readonly onTransformResponse: undefined;
}>;
