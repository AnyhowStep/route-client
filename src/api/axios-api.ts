import {AxiosSender, AxiosSenderArgs} from "../sender";
import {NewRequest, request} from "../request";
import {RouteMap} from "./api";


export type AxiosApi<MapT extends RouteMap> = (
    & {
        readonly sender : AxiosSender;
        readonly routes : MapT;
    }
    & {
        [routeName in Exclude<Extract<keyof MapT, string>, "sender"|"routes">] : (
            () => NewRequest<MapT[routeName], AxiosSender>
        );
    }
);
export interface AxiosApiConstructor<MapT extends RouteMap> {
    new (args : AxiosSenderArgs) : AxiosApi<MapT>;
    readonly routes : MapT;
};
export function toAxiosApi<MapT extends RouteMap> (map : MapT) : AxiosApiConstructor<MapT> {
    class AxiosApiResult {
        static readonly routes : MapT = map;

        readonly sender : AxiosSender;
        readonly routes : MapT;
        constructor (args : AxiosSenderArgs) {
            this.sender = new AxiosSender(args);
            this.routes = map;
        }
    }
    for (let routeName in map) {
        if (!map.hasOwnProperty(routeName)) {
            continue;
        }
        (AxiosApiResult.prototype as any)[routeName] = function (this : AxiosApiResult) {
            return request(map[routeName] as any, this.sender);
        };
    }
    return AxiosApiResult as any;
}