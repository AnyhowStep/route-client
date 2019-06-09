import * as rd from "route-declaration";
import {RequestData} from "../request";

export type CanGetPath<DataT extends RequestData> = (
    rd.RouteUtil.ClientExpectedParam<DataT["route"]> extends never ?
    true :
    DataT["param"] extends rd.RouteUtil.ClientExpectedParam<DataT["route"]> ?
    true :
    false
);
export type AssertCanGetPath<DataT extends RequestData> = (
    rd.RouteUtil.ClientExpectedParam<DataT["route"]> extends never ?
    DataT :
    DataT["param"] extends rd.RouteUtil.ClientExpectedParam<DataT["route"]> ?
    DataT :
    ["Cannot call .getPath() before .setParam()"]
);
export function getPath<DataT extends RequestData> (data : DataT) {
    const param = data.route.param == undefined ?
        {} :
        data.route.param(`${rd.RouteUtil.getMethod(data.route)} ${data.route.path.routerPath} : param`, data.param);
    const path = data.route.path.getCallingPath(param);
    return path;
}