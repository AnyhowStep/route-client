import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const path = client.request(
    route()
        .appendParam("treeId")
        .setParam(tm.object({
            treeId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setParam({
    treeId : BigInt(3)
}).getPath();