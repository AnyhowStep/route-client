import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const req = client.request(
    route(),
    null as unknown as client.ISender
).deepMergeOnInjectHeader((_req) => {
    return {
        amazing : true,
    } as const;
}).deepMergeOnInjectHeader((_req) => {
    return {
        disappointing : false,
    } as const;
});

export const req_1 = client.request(
    route(),
    null as unknown as client.ISender
).deepMergeOnInjectHeader((_req) => {
    return Promise.resolve({
        amazing : true,
    } as const);
}).deepMergeOnInjectHeader((_req) => {
    return {
        disappointing : false,
    } as const;
});

export const req_2 = client.request(
    route(),
    null as unknown as client.ISender
).deepMergeOnInjectHeader((_req) => {
    return {
        amazing : true,
    } as const;
}).deepMergeOnInjectHeader((_req) => {
    return Promise.resolve({
        disappointing : false,
    } as const);
});

export const req_3 = client.request(
    route(),
    null as unknown as client.ISender
).deepMergeOnInjectHeader((_req) => {
    return Promise.resolve({
        amazing : true,
    } as const);
}).deepMergeOnInjectHeader((_req) => {
    return Promise.resolve({
        disappointing : false,
    } as const);
});
