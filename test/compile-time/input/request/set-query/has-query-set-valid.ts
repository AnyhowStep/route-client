import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setQuery(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setQuery({
    gadgetId : BigInt(1),
});
