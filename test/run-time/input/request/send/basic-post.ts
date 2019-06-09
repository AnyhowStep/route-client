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
    create : route()
        .append("/flower")
        .setBody(tm.object(
            fields.name,
            fields.wateredAt,
        ))
        .setResponse(flower),
});
tape(__filename, async (t) => {
    const port = 9742;
    const server = await new Promise<http.Server>((resolve) => {
        const app = express();
        app.use(express.json());
        app.post("/flower", (req, res) => {
            const body = FlowerApi.routes.create.body("req.body", req.body);
            res.setHeader("hello", "world");
            res.json(flower.mapMappable(
                "response",
                {
                    flowerId : 17,
                    ...body,
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

    const body = {
        name : "Orchid",
        wateredAt : new Date(),
    };
    const fetchResult = await flowerApi.create()
        .setBody(body)
        .send();
    t.deepEqual(fetchResult.sendConfig.method, "POST");
    t.deepEqual(fetchResult.sendConfig.path, "/flower");
    t.deepEqual(fetchResult.sendConfig.query, undefined);
    t.deepEqual(fetchResult.sendConfig.body, body);
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
    t.deepEqual(fetchResult.responseBody.flowerId, BigInt(17));
    t.deepEqual(
        {
            ...fetchResult.responseBody,
            flowerId : undefined,
        },
        {
            ...body,
            flowerId : undefined,
        }
    )
    t.true(fetchResult.responseHeader instanceof Object);
    t.deepEqual(fetchResult.responseHeader.hello, "world");

    await new Promise((resolve) => {
        server.close(resolve);
    });

    t.end();
});