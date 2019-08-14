# `route-client`

Use [`route-declaration`](https://github.com/anyhowstep/route-declaration) and [`type-mapping`](https://github.com/anyhowstep/type-mapping) to make compile-time, and run-time type-safe API calls.

Maps/validates outgoing request param, query, body, header data during compile-time and run-time.

Maps/validates incoming response data during compile-time and run-time.

-----

### Goals

+ Compile-time type safety

  Using `route-declaration`, you may build your requests and have
  TypeScript check it during compile-time and give helpful error messages.

(TODO: More goals)

-----

### Installation

```
npm install --save route-client
```

-----

### Basic Usage

```ts
import * as tm from "type-mapping/fluent";
import {route} from "route-declaration";
import {toAxiosApi} from "route-client";

const fields = tm.fields({
    flowerId : tm.mysql.bigIntUnsigned(),
    name : tm.mysql.varChar(),
    wateredAt : tm.mysql.dateTime(3),
});

/**
    A mapper that returns,

    {
        flowerId : bigint,
        name : string,
        wateredAt : Date,
    }
*/
const flower = tm.object(fields);

const all = route()
    .append("/flower");
const one = route()
    .append("/flower")
    .appendParam(fields.flowerId, /\d+/);

//`FlowerApi` is a class constructor
const FlowerApi = toAxiosApi({
    //POST /flower
    //Creates a new flower entry
    create : all
        .setBody(tm.object(
            fields.name,
            fields.wateredAt,
        ))
        .setResponse(flower),
    //GET /flower/:flowerId
    //Fetches a single flower
    fetch : one
        .setResponse(flower),
    //PUT /flower/:flowerId
    //Updates a single flower
    update : one
        .setMethod("PUT")
        .setBody(tm.object(
            fields.name.optional(),
            fields.wateredAt.optional(),
        ))
        .setResponse(flower),
    //DELETE /flower/:flowerId
    //Deletes a single flower
    delete : one
        .setMethod("DELETE")
    //GET /flower?page=:number&rowsPerPage=:number
    //Fetches all flowers, paginated
    paginate : all
        .setQuery(tm.object({
            page : tm.mysql.intUnsigned().optional(),
            rowsPerPage : tm.mysql.intUnsigned().optional(),
        }))
        .setResponse(tm.object({
            rows : flower.array(),
            info : tm.object({
                page : tm.mysql.intUnsigned(),
                rowsPerPage : tm.mysql.intUnsigned(),
                rowsFound : tm.mysql.intUnsigned(),
                pagesFound : tm.mysql.intUnsigned(),
            }),
        })),
});

//`flowerApi` is an instance of `FlowerApi`, with all the routes
const flowerApi = new FlowerApi({
    //e.g. http://example.com:9999
    domain : `http://localhost`,
    //The root path the is prepended to all paths of the API
    root : `/api`,
});

//POST http://localhost/api/flower
//Throws an error if a non-2xx status code is returned (like 400, 401, 422, 500, etc.)
flowerApi.create()
    .setBody({
        name : "Orchid by the Kitchen Window",
        wateredAt : new Date(),
    })
    .send()
    .then((sendResult) => {
        /*
            {
                flowerId : bigint,
                name : "Orchid by the Kitchen Window",
                wateredAt : Date,
            }
        */
        console.log(sendResult.responseBody);
    });
//GET http://localhost/api/flower/4
//Throws an error if a non-2xx status code is returned (like 404)
flowerApi.fetch()
    .setParam({
        flowerId : 4n,
    })
    .send()
    .then((sendResult) => {
        /*
            {
                flowerId : bigint,
                name : string,
                wateredAt : Date,
            }
        */
        console.log(sendResult.responseBody);
    });
//GET http://localhost/api/flower/4
//Throws an error if a non-2xx, and non-404 status code is returned (like 500)
flowerApi.fetch()
    .setParam({
        flowerId : 4n,
    })
    //You can pass non-2xx status codes here.
    //to handle them without throwing an error.
    .on(404, () => {
        return undefined;
    })
    .send()
    .then((sendResult) => {
        if (sendResult.status == 404) {
            /*
                Type of `sendResult.responseBody` narrowed to `undefined`
            */
            console.log(sendResult.responseBody);
            //Error; property flowerId does not exist on `undefined`
            console.log(sendResult.responseBody.flowerId);
        } else {
            /*
                Type of `sendResult.responseBody` narrowed to flower object,
                {
                    flowerId : bigint,
                    name : string,
                    wateredAt : Date,
                }
            */
            console.log(sendResult.responseBody);
            //OK!
            console.log(sendResult.responseBody.flowerId);
        }
    });

//PUT http://localhost/api/flower/4
//Throws an error if a non-2xx, non-404, non-304 status code is returned (like 500)
flowerApi.update()
    .setParam({
        flowerId : 4n,
    })
    .setBody({
        //`name` is optional, so we can leave it undefined.
        //We set the `name` to update it.
        name : "Lily by the Pond",
        //`wateredAt` is optional, so we can leave it undefined.
        //We leave it unset to not update it.
    })
    //You can pass non-2xx status codes here.
    //to handle them without throwing an error.
    .on(404, () => {
        return {
            notFound : true,
        } as const;
    })
    //You can pass non-2xx status codes here.
    //to handle them without throwing an error.
    .on(304, () => {
        return {
            notModified : true,
        } as const;
    })
    .send()
    .then((sendResult) => {
        if (sendResult.status == 404) {
            /*
                Type of `sendResult.responseBody` narrowed to `{ notFound : true }`
            */
            console.log(sendResult.responseBody);
            //OK; true
            console.log(sendResult.responseBody.notFound);
        } else if (sendResult.status == 304) {
            /*
                Type of `sendResult.responseBody` narrowed to `{ notModified : true }`
            */
            console.log(sendResult.responseBody);
            //OK; true
            console.log(sendResult.responseBody.notModified);
        } else {
            /*
                Type of `sendResult.responseBody` narrowed to flower object,
                {
                    flowerId : bigint,
                    name : string,
                    wateredAt : Date,
                }
            */
            console.log(sendResult.responseBody);
            //OK!
            console.log(sendResult.responseBody.flowerId);
        }
    });

//DELETE http://localhost/api/flower/4
//Throws an error if a non-2xx, and non-404 status code is returned (like 500)
flowerApi.delete()
    .setParam({
        flowerId : 4n,
    })
    //You can pass non-2xx status codes here.
    //to handle them without throwing an error.
    .on(404, () => {
        return {
            notFound : true,
        } as const;
    })
    .send()
    .then((sendResult) => {
        if (sendResult.status == 404) {
            /*
                Type of `sendResult.responseBody` narrowed to `{ notFound : true }`
            */
            console.log(sendResult.responseBody);
            //OK; true
            console.log(sendResult.responseBody.notFound);
        } else {
            /*
                The route has no response mapper specified.
                Type of `sendResult.responseBody` narrowed to `undefined`
            */
            console.log(sendResult.responseBody);
        }
    });

//GET http://localhost/api/flower
//Throws an error if a non-2xx status code is returned (like 500)
flowerApi.paginate()
    .setQuery({
        page : 11,
    })
    .send()
    .then((sendResult) => {
        /*
            {
                rows : {
                    flowerId : bigint,
                    name : string,
                    wateredAt : Date,
                }[],
                info : {
                    page : number,
                    rowsPerPage : number,
                    rowsFound : number,
                    pagesFound : number,
                }
            }
        */
        console.log(sendResult.responseBody);
    });
```

-----

### `AxiosSender`, `ISender`

An [`ISender`](src/sender/sender.ts) performs the actual network request and receives the response.

This package comes with a single implementation of `ISender`
that uses [`axios`](https://github.com/axios/axios) and is called [`AxiosSender`](src/sender/axios-sender.ts).

You may create your own senders by implementing `ISender`.

-----

### `Request`, `request()`

The function `request(route, sender)` takes a `route` declared with the
[`route-declaration`](https://github.com/anyhowstep/route-declaration) package
and a sender implementing `ISender`.

It returns a [`Request`](src/request/request.ts) class.

The `Request` class is a request builder that lets you
set all the necessary param, query, body, header values
before calling `.send()` to perform the network request.

The `Request` class also lets you specify error handling for
specific http status codes with the `.on()` method.

See [these tests](test/run-time/input/request/send) for more details.

-----

### `HttpStatusCode`, `HttpStatusCode2xx`, `HttpStatusCodeNon2xx`

Enums that contain the varieous HTTP status codes.

See [`http-status-code.ts`](src/http-status-code.ts) for more details.

-----

### `toAxiosApi()`, `toApi()`

Instead of calling `request(route, sender)` repeatedly, [`toApi()`](src/api/api.ts)
and [`toAxiosApi()`](src/api/axios-api.ts) may be used to aggregate
route declarations, and an `ISender` into one class.

```ts
declare const axiosSenderArgs : AxiosSenderArgs;
const sender = new AxiosSender(axiosSenderArgs);
//This is tiresome
request(createRoute, sender);
request(fetchRoute, sender);
request(updateRoute, sender);
request(deleteRoute, sender);

//More set-up is required here.
const FlowerApi = toAxiosApi({
    create : createRoute,
    fetch : fetchRoute,
    update : updateRoute,
    delete : deleteRoute,
});
const flowerApi = new FlowerApi(axiosSenderArgs);
//However, each API call is now shorter.
flowerApi.create();
flowerApi.fetch();
flowerApi.update();
flowerApi.delete();
```

-----

### `TransformBodyDelegate`

You may wish to use JS objects when setting the body of your network request.

However, the server implementing the API endpoint may be expecting
`application/x-www-form-urlencoded`.

With a `TransformBodyDelegate`, you can still use JS objects
when building your request.

The `TransformBodyDelegate` will be invoked
to transform the JS object into the `application/x-www-form-urlencoded`
format **before** sending the request.

See `Request.setOnTransformBody()` for more details.
Calling this will apply the `TransformBodyDelegate` for that one
network request.

Also see `AxiosApiArgs.onTransformBody`.
Setting this property will apply the `TransformBodyDelegate`
to all requests made with the `AxiosApi` instance.

Using `AxiosApiArgs.onTransformBody` is the recommended way to
use this feature as it requires less boilerplate, overall.

See [this test](test/run-time/input/api/axios-api/set-on-transform-body/basic-post.ts) for more details.

-----

### `InjectHeaderDelegate`

Your API may require an `api-key` header for all network requests.
Having to set the header value on all requests might be too much effort.

Using `AxiosApiArgs.onInjectHeader`, you can apply a default
set of header keys and values to all requests.

See [this test](test/run-time/input/api/axios-api/set-on-inject-header/basic-get.ts) for more details.

-----

### `TransformResponseDelegate`

You may wish to work with JS objects when receiving a network response.

However, the server implementing the API endpoint might only send
responses in XML, or binary format.

With a `TransformResponseDelegate`, you can still use JS objects
after receiving a response.

The `TransformResponseDelegate` will be invoked
to transform the response into a JS object
**before** applying the response mapper to it.

`AxiosApiArgs.onTransformResponse` is the recommended way to use
this feature.

See [this test](test/run-time/input/api/axios-api/set-on-transform-response/basic-get.ts) for more details.

-----

### Contributing

(TODO)

-----

### Tests

```
npm run sanity-check
```

The above command rebuilds this package and runs the compile-time and run-time tests.

-----

# Cookbook

(TODO)