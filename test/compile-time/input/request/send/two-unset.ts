import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const sendResult = client.request(
    route()
        .append("/bird")
        .appendParam("birdId")
        .setParam(tm.object({
            birdId : tm.mysql.bigIntUnsigned(),
        }))
        .setQuery(tm.object({
            format : tm.literal("json", "xml"),
        }))
        .setBody(tm.object({
            includeImage : tm.mysql.boolean().optional(),
        }))
        .setHeader(tm.object({
            apiKey : tm.mysql.varChar(1, 255),
        }))
        .setResponse(tm.object({
            birdId : tm.mysql.bigIntUnsigned(),
            imageUrl : tm.mysql.varChar(1, 255).orNull(),
            name : tm.mysql.varChar(1, 255),
            description : tm.mysql.varChar(),
        })),
    null as unknown as client.ISender
).setParam({
    birdId : BigInt(9000),
}).setBody({
}).send();