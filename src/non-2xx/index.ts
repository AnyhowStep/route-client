import {SendResult} from "../sender";
import {HttpStatusCodeNon2xx} from "../http-status-code";

export interface Non2xxDelegate {
    //May return a promise, or non-promise
    (sendResult : SendResult) : unknown;
}
export type Non2xxDelegateMap = (
    {
        [httpStatusCode in HttpStatusCodeNon2xx]? : Non2xxDelegate;
    }
);

export namespace Non2xxUtil {
    export type ResponseOf<DelegateT extends Non2xxDelegate> = (
        ReturnType<DelegateT> extends PromiseLike<infer T> ?
        T :
        ReturnType<DelegateT>
    );
    export type SendResultOf<MapT extends Non2xxDelegateMap> = (
        {
            [status in Extract<keyof MapT, HttpStatusCodeNon2xx>] : (
                & SendResult
                & {
                    status : Extract<HttpStatusCodeNon2xx, status>|status,
                    responseBody : ResponseOf<Extract<MapT[status], Non2xxDelegate>>,
                }
            )
        }[Extract<keyof MapT, HttpStatusCodeNon2xx>]
    );
    export type SetDelegate<
        MapT extends Non2xxDelegateMap,
        StatusT extends HttpStatusCodeNon2xx,
        DelegateT extends Non2xxDelegate
    > = (
        {
            [status in (keyof MapT)|StatusT] : (
                status extends StatusT ?
                DelegateT :
                MapT[status]
            )
        }
    );
    export function setDelegate<
        MapT extends Non2xxDelegateMap,
        StatusT extends HttpStatusCodeNon2xx,
        DelegateT extends Non2xxDelegate
    > (
        map : MapT,
        status : StatusT,
        delegate : DelegateT
    ) : SetDelegate<MapT, StatusT, DelegateT> {
        return {
            ...map,
            [status] : delegate,
        } as any;
    }
}