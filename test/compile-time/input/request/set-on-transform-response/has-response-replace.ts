import * as tm from "type-mapping";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

/**
    Transforms response to incorrect type
*/
export const req = client.request(
    route()
        .setResponse(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
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

export const req_1 = client.request(
    route()
        .setResponse(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : true,
    } as const;
}).setOnTransformResponse((_sendResult, _req) => {
    return {
        food : "Apple",
        ingredientId : BigInt(3),
    } as const;
});

export const req_2 = client.request(
    route()
        .setResponse(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        food : "Apple",
        ingredientId : BigInt(3),
    } as const;
}).setOnTransformResponse((_sendResult, _req) => {
    return {
        amazing : false,
    } as const;
});

export const req_3 = client.request(
    route()
        .setResponse(tm.object({
            food : tm.literal("Apple", "Orange", "Pear", "Banana"),
            ingredientId : tm.mysql.bigIntUnsigned(),
        })),
    null as unknown as client.ISender
).setOnTransformResponse((_sendResult, _req) => {
    return {
        food : "Apple",
        ingredientId : BigInt(3),
    } as const;
}).setOnTransformResponse((_sendResult, _req) => {
    return {
        food : "Orange",
        ingredientId : BigInt(3),
    } as const;
});