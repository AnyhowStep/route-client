import * as client from "../../../../../dist";
export declare const req: client.Request<{
    readonly route: import("route-declaration").Route<import("route-declaration").DefaultRouteData>;
    readonly sender: client.ISender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: (_body: undefined, _req: {
        readonly route: import("route-declaration").Route<import("route-declaration").DefaultRouteData>;
        readonly sender: client.ISender;
        readonly param: never;
        readonly query: never;
        readonly body: never;
        readonly header: never;
    }) => {
        readonly amazing: true;
    };
    readonly onInjectHeader: undefined;
    readonly onTransformResponse: undefined;
}>;
