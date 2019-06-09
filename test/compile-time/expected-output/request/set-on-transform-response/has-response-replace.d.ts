import * as tm from "type-mapping";
import * as client from "../../../../../dist";
/**
    Transforms response to incorrect type
*/
export declare const req: any;
export declare const req_1: any;
export declare const req_2: any;
export declare const req_3: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: tm.Mapper<unknown, {
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: bigint;
        }> & tm.ExpectedInput<{
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: bigint;
        }> & tm.MappableInput<{
            food: "Apple" | "Orange" | "Pear" | "Banana";
            ingredientId: string | number | bigint;
        }>;
    }>;
    readonly sender: client.ISender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: undefined;
    readonly onInjectHeader: undefined;
    readonly onTransformResponse: (_sendResult: client.SendResult, _req: {
        readonly route: import("route-declaration").Route<{
            readonly method: import("route-declaration").Method.Contextual;
            readonly path: import("route-declaration").Path<never>;
            readonly param: undefined;
            readonly query: undefined;
            readonly body: undefined;
            readonly header: undefined;
            readonly response: tm.Mapper<unknown, {
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: bigint;
            }> & tm.ExpectedInput<{
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: bigint;
            }> & tm.MappableInput<{
                food: "Apple" | "Orange" | "Pear" | "Banana";
                ingredientId: string | number | bigint;
            }>;
        }>;
        readonly sender: client.ISender;
        readonly param: never;
        readonly query: never;
        readonly body: never;
        readonly header: never;
    }) => {
        readonly food: "Orange";
        readonly ingredientId: bigint;
    };
}>;
