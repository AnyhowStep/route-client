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
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: bigint;
        }> & tm.ExpectedInput<{
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: bigint;
        }> & tm.MappableInput<{
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: string | number | bigint;
        }>;
        readonly response: undefined;
    }>;
    readonly sender: client.ISender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: undefined;
    readonly onInjectHeader: (_req: {
        readonly route: import("route-declaration").Route<{
            readonly method: import("route-declaration").Method.Contextual;
            readonly path: import("route-declaration").Path<never>;
            readonly param: undefined;
            readonly query: undefined;
            readonly body: undefined;
            readonly header: tm.Mapper<unknown, {
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: bigint;
            }> & tm.ExpectedInput<{
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: bigint;
            }> & tm.MappableInput<{
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: string | number | bigint;
            }>;
            readonly response: undefined;
        }>;
        readonly sender: client.ISender;
        readonly param: never;
        readonly query: never;
        readonly body: never;
        readonly header: {
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: bigint;
        };
    }) => {
        readonly amazing: true;
    };
    readonly onTransformResponse: undefined;
}>;
