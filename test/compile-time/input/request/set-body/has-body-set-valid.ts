import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setBody(tm.object({
            gadgetId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setBody({
    gadgetId : BigInt(1),
});
