import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route()
        .setResponse(tm.object({
            description : tm.string(),
        })),
    null as unknown as client.ISender
).on(200, () => {
    return 4;
});
export const sendResult = req.send();