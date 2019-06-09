import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

client.request(
    route()
        .append("/gadgets")
        .appendParam("gadgetId")
        .setParam(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setParam(null);

client.request(
    route()
        .append("/gadgets")
        .appendParam("gadgetId")
        .setParam(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setParam({
    gadgetId : "1"
});

client.request(
    route()
        .append("/gadgets")
        .appendParam("gadgetId")
        .setParam(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setParam({
    gadgetId2 : "1"
});
