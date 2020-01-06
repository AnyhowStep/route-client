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
    /**
     * Creates a flower
     */
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
            t.deepEqual(req.body.extra, true);
            const body = FlowerApi.routes.create.body(
                "req.body",
                req.body
            );
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
        onTransformBody : (body) => {
            return {
                ...body,
                extra : true,
            };
        },
    });

    const body = {
        name : "Orchid",
        wateredAt : new Date(),
    };
    const result = await flowerApi.create()
        .setBody(body)
        .send();
    t.deepEqual(result.sendConfig.method, "POST");
    t.deepEqual(result.sendConfig.path, "/flower");
    t.deepEqual(result.sendConfig.query, undefined);
    t.deepEqual(result.sendConfig.body, {
        ...body,
        extra : true,
    });
    t.deepEqual(result.sendConfig.header, {});
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
    t.deepEqual(result.responseBody.flowerId, BigInt(17));
    t.deepEqual(
        {
            ...result.responseBody,
            flowerId : undefined,
        },
        {
            ...body,
            flowerId : undefined,
        }
    )
    t.true(result.responseHeader instanceof Object);
    t.deepEqual(result.responseHeader.hello, "world");

    await new Promise((resolve) => {
        server.close(resolve);
    });

    t.end();
});