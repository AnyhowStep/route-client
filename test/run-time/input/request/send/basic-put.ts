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
    update : route()
        .setMethod("PUT")
        .append("/flower")
        .appendParam("flowerId", /\d+/)
        .setParam(tm.object(
            fields.flowerId,
        ))
        .setBody(tm.object(
            fields.name.optional(),
            fields.wateredAt.optional(),
        ))
        .setResponse(flower),
});
tape(__filename, async (t) => {
    const port = 9742;
    const server = await new Promise<http.Server>((resolve) => {
        const app = express();
        app.use(express.json());
        app.put("/flower/:flowerId(\\d+)", (req, res) => {
            const params = FlowerApi.routes.update.param("req.params", req.params);
            const body = FlowerApi.routes.update.body("req.body", req.body);
            res.setHeader("hello", "world");
            res.json(flower.mapMappable(
                "response",
                {
                    flowerId : params.flowerId,
                    name : (body.name == undefined) ?
                        "Not updated" :
                        body.name,
                    wateredAt : (body.wateredAt == undefined) ?
                        "2001-01-01" :
                        body.wateredAt,
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

    {
        const fetchResult = await flowerApi.update()
            .setParam({
                flowerId : BigInt(88),
            })
            .setBody({
                name : "Orchid",
                wateredAt : new Date("2010-01-01"),
            })
            .send();
        t.deepEqual(fetchResult.sendConfig.method, "PUT");
        t.deepEqual(fetchResult.sendConfig.path, "/flower/88");
        t.deepEqual(fetchResult.sendConfig.query, undefined);
        t.deepEqual(fetchResult.sendConfig.body, {
            name : "Orchid",
            wateredAt : new Date("2010-01-01"),
        });
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
        t.deepEqual(
            fetchResult.responseBody,
            {
                flowerId : BigInt(88),
                name : "Orchid",
                wateredAt : new Date("2010-01-01"),
            }
        )
        t.true(fetchResult.responseHeader instanceof Object);
        t.deepEqual(fetchResult.responseHeader.hello, "world");
    }

    {
        const fetchResult = await flowerApi.update()
            .setParam({
                flowerId : BigInt(77),
            })
            .setBody({
                wateredAt : new Date("2010-01-01"),
            })
            .send();
        t.deepEqual(fetchResult.sendConfig.method, "PUT");
        t.deepEqual(fetchResult.sendConfig.path, "/flower/77");
        t.deepEqual(fetchResult.sendConfig.query, undefined);
        t.deepEqual(fetchResult.sendConfig.body, {
            name : undefined,
            wateredAt : new Date("2010-01-01"),
        });
        t.deepEqual(fetchResult.sendConfig.header, {});
        t.deepEqual(
            fetchResult.responseBody,
            {
                flowerId : BigInt(77),
                name : "Not updated",
                wateredAt : new Date("2010-01-01"),
            }
        )
    }

    {
        const fetchResult = await flowerApi.update()
            .setParam({
                flowerId : BigInt(23),
            })
            .setBody({
                name : "Rafflesia"
            })
            .send();
        t.deepEqual(fetchResult.sendConfig.method, "PUT");
        t.deepEqual(fetchResult.sendConfig.path, "/flower/23");
        t.deepEqual(fetchResult.sendConfig.query, undefined);
        t.deepEqual(fetchResult.sendConfig.body, {
            name : "Rafflesia",
            wateredAt : undefined,
        });
        t.deepEqual(fetchResult.sendConfig.header, {});
        t.deepEqual(
            fetchResult.responseBody,
            {
                flowerId : BigInt(23),
                name : "Rafflesia",
                wateredAt : new Date("2001-01-01"),
            }
        )
    }

    {
        const fetchResult = await flowerApi.update()
            .setParam({
                flowerId : BigInt(57),
            })
            .setBody({
            })
            .send();
        t.deepEqual(fetchResult.sendConfig.method, "PUT");
        t.deepEqual(fetchResult.sendConfig.path, "/flower/57");
        t.deepEqual(fetchResult.sendConfig.query, undefined);
        t.deepEqual(fetchResult.sendConfig.body, {
            name : undefined,
            wateredAt : undefined,
        });
        t.deepEqual(fetchResult.sendConfig.header, {});
        t.deepEqual(
            fetchResult.responseBody,
            {
                flowerId : BigInt(57),
                name : "Not updated",
                wateredAt : new Date("2001-01-01"),
            }
        )
    }


    await new Promise((resolve) => {
        server.close(resolve);
    });

    t.end();
});