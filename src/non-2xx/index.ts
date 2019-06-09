import {SendResult} from "../sender";
import {HttpStatusCodeNon2xx, HttpStatusCode2xx} from "../http-status-code";
import {SyncReturnType} from "../sync-return-type";

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
        SyncReturnType<DelegateT>
    );
    export type SendResultOf<MapT extends Non2xxDelegateMap> = (
        {
            [status in keyof MapT] : (
                Extract<HttpStatusCode2xx, status> extends never ?
                (
                    MapT[status] extends Non2xxDelegate ?
                    (
                        & SendResult
                        & {
                            status : Extract<HttpStatusCodeNon2xx, status>|status,
                            responseBody : Non2xxUtil.ResponseOf<Extract<MapT[status], Non2xxDelegate>>,
                        }
                    ) :
                    never
                ) :
                never
            )
        }[keyof MapT]
    );
    //https://github.com/microsoft/TypeScript/issues/31834
    /*
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
    //*/
    export type SetDelegate<
        MapT extends Non2xxDelegateMap,
        StatusT extends HttpStatusCodeNon2xx,
        DelegateT extends Non2xxDelegate
    > = (
        {
            [status in (keyof MapT)|Extract<HttpStatusCodeNon2xx, StatusT>] : (
                status extends StatusT ?
                //https://github.com/microsoft/TypeScript/issues/31834
                (
                    StatusT extends status ?
                    DelegateT :
                    MapT[status]
                ) :
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