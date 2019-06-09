import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

client.request(
    route()
        .setHeader(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setHeader(null);

client.request(
    route()
        .setHeader(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setHeader({
    gadgetId : "1"
});

client.request(
    route()
        .setHeader(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setHeader({
    gadgetId2 : "1"
});
