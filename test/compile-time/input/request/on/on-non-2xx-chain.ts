import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setResponse(tm.object({
            description : tm.string(),
        })),
    null as unknown as client.ISender
).on(404, () => {
    return {
        message : "Will be overwritten not found",
    } as const;
}).on(client.HttpStatusCodeNon2xx.NOT_IMPLEMENTED, () => {
    return {
        message : "Will be overwritten not implemented",
    } as const;
}).on(501, () => {
    return {
        message : "Overwrites not implemented",
    } as const;
}).on(304, () => {
    return {
        message : "Not modified",
    } as const;
}).on(client.HttpStatusCodeNon2xx.NOT_FOUND, () => {
    return {
        message : "Overwrites not found",
    } as const;
}).on(client.HttpStatusCodeNon2xx.PAYLOAD_TOO_LARGE, () => {
    return {
        message : "Payload too large",
    } as const;
});
export const sendResult = req.send();