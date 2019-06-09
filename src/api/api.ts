import * as rd from "route-declaration";
import {ISender} from "../sender";
import {NewRequest, request} from "../request";

export interface RouteMap {
    [routeName : string] : rd.Route<rd.RouteData>;
}

export type Api<MapT extends RouteMap, SenderT extends ISender> = (
    & {
        readonly sender : SenderT;
        readonly routes : MapT;
    }
    & {
        [routeName in Exclude<Extract<keyof MapT, string>, "sender"|"routes">] : (
            () => NewRequest<MapT[routeName], ISender>
        );
    }
);
export interface ApiConstructor<MapT extends RouteMap> {
    new <SenderT extends ISender>(sender : SenderT) : Api<MapT, SenderT>;
    readonly routes : MapT;
};
export function toApi<MapT extends RouteMap> (map : MapT) : ApiConstructor<MapT> {
    class ApiResult<SenderT extends ISender> {
        static readonly routes : MapT = map;

        readonly sender : SenderT;
        readonly routes : MapT;
        constructor (sender : SenderT) {
            this.sender = sender;
            this.routes = map;
        }
    }
    for (let routeName in map) {
        if (!map.hasOwnProperty(routeName)) {
            continue;
        }
        (ApiResult.prototype as any)[routeName] = function (this : ApiResult<ISender>) {
            return request(map[routeName] as any, this.sender);
        };
    }
    return ApiResult as any;
}