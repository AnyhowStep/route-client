import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

client.request(
    route()
        .setQuery(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setQuery(null);

client.request(
    route()
        .setQuery(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setQuery({
    gadgetId : "1"
});

client.request(
    route()
        .setQuery(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setQuery({
    gadgetId2 : "1"
});
