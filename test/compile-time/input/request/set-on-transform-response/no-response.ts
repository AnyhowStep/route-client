import {route} from "route-declaration";
import * as client from "../../../../../dist";

/**
    Cannot return an object because the response is of type `never`
*/
export const req = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : true,
    } as const;
});

export const req_1 = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return undefined as never;
});