import {route} from "route-declaration";
import * as client from "../../../../../dist";

/**
    Cannot return an object because the response is of type `never`
*/
export const req = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return undefined as never;
}).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : false,
    } as const;
});

/**
    Cannot return an object because the response is of type `never`
*/
export const req_1 = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : true,
    } as const;
}).setOnTransformResponse((_sendResult, _req) => {
    return undefined as never;
});

/**
    Cannot return an object because the response is of type `never`
*/
export const req_2 = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return undefined as never;
}).setOnTransformResponse((_sendResult, _req) => {
    return undefined as never;
});

/**
    Cannot return an object because the response is of type `never`
*/
export const req_3 = client.request(
    route(),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : true,
    } as const;
}).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : false,
    } as const;
});