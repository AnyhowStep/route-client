import * as tm from "type-mapping/fluent";
import {route} from "route-declaration";
import * as client from "../../../../../dist";

const gem = tm.object({
    gemId : tm.mysql.bigIntUnsigned(),
    cutter : tm.mysql.varChar(1, 255),
    name : tm.mysql.varChar(1, 255),
    metadata : tm.stringToJsonObject(),
});
export const GemApi = client.toAxiosApi({
    create : route()
        .append("/gem")
        .setBody(tm.object({
            cutter : tm.mysql.varChar(1, 255),
            name : tm.mysql.varChar(1, 255),
            metadata : tm.stringToJsonObject().optional(),
        }))
        .setResponse(gem),
    paginate : route()
        .append("/gem")
        .setQuery(tm.object({
            page : tm.mysql.intUnsigned(),
            rowsPerPage : tm.mysql.intUnsigned().optional(),
        }))
        .setResponse(tm.object({
            rows : gem.array(),
            info : tm.object({
                page : tm.mysql.intUnsigned(),
                rowsPerPage : tm.mysql.intUnsigned(),
                pagesFound : tm.mysql.intUnsigned(),
                rowsFound : tm.mysql.intUnsigned(),
            }),
        })),
    fetch : route()
        .append("/gem")
        .appendParam("gemId", /\d+/)
        .setParam(tm.object({
            gemId : tm.mysql.bigIntUnsigned(),
        }))
        .setResponse(gem),
    /**
     * Preserve update comment
     */
    update : route()
        .setMethod("PUT")
        .append("/gem")
        .appendParam("gemId", /\d+/)
        .setParam(tm.object({
            gemId : tm.mysql.bigIntUnsigned(),
        }))
        .setBody(tm.object({
            cutter : tm.mysql.varChar(1, 255).optional(),
            name : tm.mysql.varChar(1, 255).optional(),
            metadata : tm.stringToJsonObject().optional(),
        }))
        .setResponse(gem),
    /**
     * Preserve delete comment
     */
    delete : route()
        .setMethod("DELETE")
        .append("/gem")
        .appendParam("gemId", /\d+/)
        .setParam(tm.object({
            gemId : tm.mysql.bigIntUnsigned(),
        })),
});
export const gemApi = new GemApi(null as unknown as client.AxiosApiArgs);
export const create = gemApi.create();
export const paginate = gemApi.paginate();
export const fetch = gemApi.fetch();
export const update = gemApi.update();
export const del = gemApi.delete();