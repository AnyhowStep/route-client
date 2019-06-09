import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setBody(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setOnTransformBody((_body, _req) => {
    return {
        amazing : true,
    } as const;
});