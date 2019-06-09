import * as http from "http";
import * as axios from "axios";
import * as tape from "tape";
import * as express from "express";
import * as tm from "type-mapping/fluent";
import {route} from "route-declaration";
import {toAxiosApi} from "../../../../../../dist";

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
    const server = await new Promise<http.Server>((resolve) => {
        const app = express();
        app.use(express.json());
        app.get("/flower/:flowerId(\\d+)", (req, res) => {
            t.deepEqual(req.headers["my-header"], "my-value");
            t.deepEqual(req.headers["my-other-header"], "my-other-value");
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
        onInjectHeader : () => {
            return {
                "my-header" : "my-value",
            };
        },
    });
    const result = await flowerApi.fetch()
        .setParam({
            flowerId : BigInt(4),
        })
        .deepMergeOnInjectHeader(() => {
            return {
                "my-other-header" : "my-other-value",
            };
        })
        .send();
    t.deepEqual(result.sendConfig.method, "GET");
    t.deepEqual(result.sendConfig.path, "/flower/4");
    t.deepEqual(result.sendConfig.query, undefined);
    t.deepEqual(result.sendConfig.body, undefined);
    t.deepEqual(result.sendConfig.header, {
        "my-header" : "my-value",
        "my-other-header" : "my-other-value",
    });
    t.deepEqual(result.code, undefined);
    t.deepEqual(result.err, undefined);
    t.deepEqual(
        (result.responseImpl as axios.AxiosResponse<unknown>).config,
        result.configImpl
    );
    t.deepEqual(
        (result.responseImpl as axios.AxiosResponse<unknown>).request,
        result.requestImpl
    );
    t.true(
        (result.responseImpl as axios.AxiosResponse<unknown>).request instanceof Object
    );
    t.deepEqual(
        (result.responseImpl as axios.AxiosResponse<unknown>).status,
        200
    );
    t.deepEqual(
        (result.responseImpl as axios.AxiosResponse<unknown>).statusText,
        "OK"
    );
    t.true(
        (result.responseImpl as axios.AxiosResponse<unknown>).config instanceof Object
    );
    t.true(
        (result.responseImpl as axios.AxiosResponse<unknown>).headers instanceof Object
    );
    t.true(
        (result.responseImpl as axios.AxiosResponse<unknown>).data instanceof Object
    );
    t.deepEqual(result.status, 200);
    t.deepEqual(result.statusText, "OK");
    t.deepEqual(result.responseBody.flowerId, BigInt(4));
    t.deepEqual(result.responseBody.name, "Rose");
    t.true(result.responseBody.wateredAt instanceof Date);
    t.true(result.responseHeader instanceof Object);

    await new Promise((resolve) => {
        server.close(resolve);
    });

    t.end();
});