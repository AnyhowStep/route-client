import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .append("/gadgets")
        .appendParam("gadgetId")
        .setParam(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setParam({
    gadgetId : BigInt(1),
});
