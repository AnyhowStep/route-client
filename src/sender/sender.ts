import * as rd from "route-declaration";

export interface SendConfig {
    readonly method : Exclude<rd.MethodStr, "Contextual">,

    /**
        Contains our `param`.
        Axios calls this `url` but we call it `path`.

        Does not contain a hostname.
    */
    readonly path : string,

    /**
        Axios calls this `params` but we call it `query`.
    */
    readonly query : undefined|{ [k : string] : unknown },

    /**
        Axios calls this `data` but we call it `body`.
    */
    readonly body : unknown,

    /**
        Axios calls this `headers` but we call it `header`.
    */
    readonly header : { [k : string] : unknown },
}
export interface SendResult {
    /**
        The `SendConfig` used to create this result.
    */
    readonly sendConfig : SendConfig;
    /**
        Sample values:
        + `"ECONNABORTED"`
        + `"ECONNREFUSED"`
    */
    readonly code : undefined|string;
    /**
        When getting a non-200 response,
        this may be set.
    */
    readonly err : undefined|unknown;
    /**
        The internal implementation config object.
        Could be anything.

        Axios calls this `config` but we call it `configImpl`.
    */
    readonly configImpl : undefined|unknown;
    /**
        The internal implementation request object.
        Could be anything.

        Axios calls this `request` but we call it `requestImpl`.
    */
    readonly requestImpl : undefined|unknown;
    /**
        The internal implementation response object.
        Could be anything.
    */
    readonly responseImpl : undefined|unknown;
    /**
        The HTTP status code:
        + 200
        + 204
        + 302
        + 400
        + 401
        + 403
        + 404
        + 500
        + etc.
    */
    readonly status : number;
    /**
        Sample values:
        + `"Bad Request"`
        + `"OK"`
        + `"abort"`
    */
    readonly statusText : string;

    /**
        The `response` body.
        Axios calls this `data` but we call it `responseBody`.
    */
    readonly responseBody : unknown;
    /**
        The `response` header.
        Axios calls this `headers` but we call it `responseHeader`.
    */
    readonly responseHeader : { [k : string] : unknown };
}
export interface ISender {
    /**
        Should not throw on 3xx, 4xx, 5xx responses.
        Should only throw if the error means
        not being able to get a HTTP status code.
    */
    send (config : SendConfig) : Promise<SendResult>;

    getDomain () : string;
    getRoot () : string;
    getBaseUrl () : string;
}