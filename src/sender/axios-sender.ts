import * as axios from "axios";
import {ISender, SendConfig, SendResult} from "./sender";

function sendResultFromAxiosResponse (
    sendConfig : SendConfig,
    response : axios.AxiosResponse<unknown>,
    err : undefined|unknown
) : SendResult {
    const code = (response as any).code;
    const sendResult : SendResult = {
        sendConfig,
        code : (typeof code == "string") ?
            code :
            undefined,
        err,
        configImpl : response.config,
        requestImpl : response.request,
        responseImpl : response,

        status : response.status,
        statusText : response.statusText,

        responseBody : response.data,
        responseHeader : response.headers,
    };
    return sendResult;
}

export interface AxiosSenderArgs {
    readonly domain : string,
    readonly root? : string,
}

export class AxiosSender implements ISender {
    private readonly domain : string;
    private readonly root : string;
    private readonly baseUrl : string;
    public readonly axiosInstance : axios.AxiosInstance;
    constructor (args : AxiosSenderArgs) {
        this.domain = args.domain.replace(/\/+$/, "");
        this.root = (args.root == undefined) ?
            "" :
            args.root
                .replace(/\/{2,}/g, "/")
                .replace(/\/$/, "");
        if (this.root.length > 0 && this.root[0] != "/") {
            this.root = "/" + this.root;
        }
        this.baseUrl = this.domain + this.root;

        this.axiosInstance = axios.default.create({
            baseURL : this.baseUrl,
            responseType : "json",
        });
    }

    async send (sendConfig : SendConfig) : Promise<SendResult> {
        return this.axiosInstance.request({
            method  : sendConfig.method as any,
            url     : sendConfig.path,
            params  : sendConfig.query,
            data    : sendConfig.body,
            headers : sendConfig.header,
        }).then((response) => {
            return sendResultFromAxiosResponse(sendConfig, response, undefined);
        }).catch((err) => {
            if (!(err.response instanceof Object)) {
                //Don't know how to handle this error.
                //TODO Figure out what other kinds of errors we can handle.
                throw err;
            }
            return sendResultFromAxiosResponse(sendConfig, err.response, err);
        });
    }

    getDomain () : string {
        return this.domain;
    }
    getRoot () : string {
        return this.root;
    }
    getBaseUrl () : string {
        return this.baseUrl;
    }
}