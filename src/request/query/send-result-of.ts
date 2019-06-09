import * as rd from "route-declaration";
import {RequestData} from "../request";
import {SendResult} from "../../sender";
import {HttpStatusCode2xx} from "../../http-status-code";
import {Non2xxUtil} from "../../non-2xx";

export type SuccessSendResultOf<DataT extends RequestData> = (
    & SendResult
    & {
        status : HttpStatusCode2xx,
        responseBody : rd.RouteUtil.ClientResponse<DataT["route"]>,
    }
);
export type SendResultOf<DataT extends RequestData> = (
    | SuccessSendResultOf<DataT>
    | Non2xxUtil.SendResultOf<DataT["non2xxDelegates"]>
);