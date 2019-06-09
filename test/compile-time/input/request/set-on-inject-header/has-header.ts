import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setHeader(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setOnInjectHeader((_req) => {
    return {
        amazing : true,
    } as const;
});