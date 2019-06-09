import * as tm from "type-mapping";
import * as client from "../../../../../dist";
export declare const req: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: tm.Mapper<unknown, {
            description: string;
        }> & tm.ExpectedInput<{
            description: string;
        }> & tm.MappableInput<{
            description: string;
        }>;
    }>;
    readonly sender: client.ISender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {
        404: () => {
            readonly message: "Not found";
        };
    };
    readonly onTransformBody: undefined;
    readonly onInjectHeader: undefined;
    readonly onTransformResponse: undefined;
}>;
export declare const sendResult: Promise<(client.SendResult & {
    status: 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226;
    responseBody: {
        description: string;
    };
}) | (client.SendResult & {
    status: 404;
    responseBody: {
        readonly message: "Not found";
    };
})>;
