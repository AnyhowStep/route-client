import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformBody((_body, _req) => {
    return {
        amazing : true,
    } as const;
}).setOnTransformBody((_body, _req) => {
    return {
        amazing : false,
    } as const;
});