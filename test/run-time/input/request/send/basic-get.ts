import * as http from "http";
import * as axios from "axios";
import * as tape from "tape";
import * as express from "express";
import * as tm from "type-mapping/fluent";
import {route} from "route-declaration";
import {toAxiosApi} from "../../../../../dist";

const fields = tm.fields({
    flowerId : tm.mysql.bigIntUnsigned(),
    name : tm.mysql.varChar(),
    wateredAt : tm.mysql.dateTime(3),
});
const flower = tm.object(fields);
const FlowerApi = toAxiosApi({
    fetch : route()
        .append("/flower")
        .appendParam("flowerId", /\d+/)
        .setParam(tm.object(
            fields.flowerId
        ))
        .setResponse(flower),
});
tape(__filename, async (t) => {
    const port = 9742;
    const calls : string[] = [];
    const server = await new Promise<http.Server>((resolve) => {
        const app = express();
        app.get("/flower/:flowerId(\\d+)", (req, res) => {
            calls.push(`fetch.${req.params.flowerId}`);
            const flowerId = fields.flowerId("req.params.flowerId", req.params.flowerId);
            res.json(flower.mapMappable(
                "response",
                {
                    flowerId : flowerId.toString(),
                    name : "Rose",
                    wateredAt : new Date(),
                }
            ));
        });
        const server = http.createServer(app).listen(port, () => {
            resolve(server);
        });
    });

    const flowerApi = new FlowerApi({
        domain : `http://localhost:${port}`,
    });

    const fetchResult = await flowerApi.fetch()
        .setParam({
            flowerId : BigInt(4),
        })
        .send();
    t.deepEqual(fetchResult.sendConfig.method, "GET");
    t.deepEqual(fetchResult.sendConfig.path, "/flower/4");
    t.deepEqual(fetchResult.sendConfig.query, undefined);
    t.deepEqual(fetchResult.sendConfig.body, undefined);
    t.deepEqual(fetchResult.sendConfig.header, {});
    t.deepEqual(fetchResult.code, undefined);
    t.deepEqual(fetchResult.err, undefined);
    t.deepEqual(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).config,
        fetchResult.configImpl
    );
    t.deepEqual(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).request,
        fetchResult.requestImpl
    );
    t.true(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).request instanceof Object
    );
    t.deepEqual(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).status,
        200
    );
    t.deepEqual(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).statusText,
        "OK"
    );
    t.true(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).config instanceof Object
    );
    t.true(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).headers instanceof Object
    );
    t.true(
        (fetchResult.responseImpl as axios.AxiosResponse<unknown>).data instanceof Object
    );
    t.deepEqual(fetchResult.status, 200);
    t.deepEqual(fetchResult.statusText, "OK");
    t.deepEqual(fetchResult.responseBody.flowerId, BigInt(4));
    t.deepEqual(fetchResult.responseBody.name, "Rose");
    t.true(fetchResult.responseBody.wateredAt instanceof Date);
    t.true(fetchResult.responseHeader instanceof Object);

    server.close();

    t.end();
});