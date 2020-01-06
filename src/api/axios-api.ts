import * as rd from "route-declaration";
import {AxiosSender, AxiosSenderArgs, SendResult} from "../sender";
import {request, Request, TransformBodyDelegate, InjectHeaderDelegate, TransformResponseDelegate} from "../request";
import {RouteMap} from "./api";

export type AxiosRequestFactoryMapImpl<MapT extends RouteMap, K extends keyof MapT> =
    {
        [routeName in K] : (
            () => Request<{
                readonly route : MapT[routeName];
                readonly sender : AxiosSender;

                readonly param  : undefined;
                readonly query  : undefined;
                readonly body   : undefined;
                readonly header : undefined;

                readonly non2xxDelegates : {};

                readonly onTransformBody : undefined|TransformBodyDelegate<any>;
                readonly onInjectHeader : undefined|InjectHeaderDelegate<any>;
                readonly onTransformResponse : undefined|TransformResponseDelegate<any>;
            }>
        );
    }
;
export type AxiosRequestFactoryMap<MapT extends RouteMap> =
    AxiosRequestFactoryMapImpl<
        MapT,
        Exclude<
            Extract<keyof MapT, string>,
            "sender"|"routes"|"onTransformBody"|"onInjectHeader"|"onTransformResponse"
        >
    >
;

export type AxiosApi<MapT extends RouteMap> =
    & {
        readonly sender : AxiosSender;
        readonly routes : MapT;

        readonly onTransformBody : undefined|TransformBodyDelegate<any>;
        readonly onInjectHeader : undefined|InjectHeaderDelegate<any>;
        readonly onTransformResponse : undefined|TransformResponseDelegate<any>;
    }
    & AxiosRequestFactoryMap<MapT>
;
export interface AxiosApiArgs extends AxiosSenderArgs {
    /**
        Called before sending the request
    */
    readonly onTransformBody? : undefined|(
        //May return a Promise<>
        (
            body : unknown,
            //Copy-paste of `SendableRequestData<DataT>`
            //to make generated .d.ts file easier to read
            req : {
                readonly route  : rd.RouteData;
                readonly sender : AxiosSender;

                readonly param  : unknown;
                readonly query  : unknown;
                readonly body   : unknown;
                readonly header : unknown;
            }
        ) => unknown
    );
    /**
        Called before sending the request
    */
    readonly onInjectHeader? : undefined|(
        //May return a Promise<>
        (
            //Copy-paste of `SendableRequestData<DataT>`
            //to make generated .d.ts file easier to read
            req : {
                readonly route  : rd.RouteData;
                readonly sender : AxiosSender;

                readonly param  : unknown;
                readonly query  : unknown;
                readonly body   : unknown;
                readonly header : unknown;
            }
        ) =>  (
            | { [k : string] : unknown }
            | Promise<{ [k : string] : unknown }>
        )
    );
    /**
        Only called with 2xx results
    */
    readonly onTransformResponse? : undefined|(
        //May return a Promise<>
        (
            sendResult : SendResult,
            //Copy-paste of `SendableRequestData<DataT>`
            //to make generated .d.ts file easier to read
            req : {
                readonly route  : rd.RouteData;
                readonly sender : AxiosSender;

                readonly param  : unknown;
                readonly query  : unknown;
                readonly body   : unknown;
                readonly header : unknown;
            }
        ) => unknown
    );
}
export interface AxiosApiConstructor<MapT extends RouteMap> {
    new (args : AxiosApiArgs) : AxiosApi<MapT>;
    readonly routes : MapT;
};
export function toAxiosApi<MapT extends RouteMap> (map : MapT) : AxiosApiConstructor<MapT> {
    class AxiosApiResult {
        static readonly routes : MapT = map;

        readonly sender : AxiosSender;
        readonly routes : MapT;

        readonly onTransformBody : any;
        readonly onInjectHeader : any;
        readonly onTransformResponse : any;

        constructor (args : AxiosApiArgs) {
            this.sender = new AxiosSender(args);
            this.routes = map;

            this.onTransformBody = args.onTransformBody as any;
            this.onInjectHeader = args.onInjectHeader as any;
            this.onTransformResponse = args.onTransformResponse as any;
        }
    }
    for (let routeName in map) {
        if (!map.hasOwnProperty(routeName)) {
            continue;
        }
        if (routeName == "sender" || routeName == "routes") {
            continue;
        }
        if (routeName == "onTransformBody" || routeName == "onInjectHeader" || routeName == "onTransformResponse") {
            continue;
        }
        (AxiosApiResult.prototype as any)[routeName] = function (this : AxiosApiResult) {
            return request(map[routeName] as any, this.sender)
                .setOnTransformBody(this.onTransformBody)
                .setOnInjectHeader(this.onInjectHeader)
                .setOnTransformResponse(this.onTransformResponse);
        };
    }
    return AxiosApiResult as any;
}