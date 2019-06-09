import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

client.request(
    route()
        .setBody(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setBody(null);

client.request(
    route()
        .setBody(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setBody({
    gadgetId : "1"
});

client.request(
    route()
        .setBody(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setBody({
    gadgetId2 : "1"
});
