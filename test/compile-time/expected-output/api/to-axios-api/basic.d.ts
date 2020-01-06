import * as client from "../../../../../dist";
export declare const GemApi: client.AxiosApiConstructor<{
    create: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: {
                [k: string]: unknown;
            } | undefined;
        }> & import("type-mapping").MappableInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    paginate: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            page: number;
            rowsPerPage: number | undefined;
        }> & import("type-mapping").ExpectedInput<{
            page: number;
        } & {
            rowsPerPage?: number | undefined;
        }> & import("type-mapping").MappableInput<{
            page: string | number | bigint;
        } & {
            rowsPerPage?: string | number | bigint | undefined;
        }>>;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").ExpectedInput<{
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").MappableInput<{
            rows: {
                metadata: string | {
                    [k: string]: unknown;
                };
                gemId: string | number | bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: string | number | bigint;
                rowsPerPage: string | number | bigint;
                pagesFound: string | number | bigint;
                rowsFound: string | number | bigint;
            };
        }>>;
    }>;
    fetch: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    /**
     * Preserve update comment
     */
    update: import("route-declaration").Route<{
        readonly method: "PUT";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string | undefined;
            name: string | undefined;
        }> & import("type-mapping").ExpectedInput<{
            metadata?: {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }> & import("type-mapping").MappableInput<{
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    /**
     * Preserve delete comment
     */
    delete: import("route-declaration").Route<{
        readonly method: "DELETE";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: undefined;
    }>;
}>;
export declare const gemApi: client.AxiosApi<{
    create: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: {
                [k: string]: unknown;
            } | undefined;
        }> & import("type-mapping").MappableInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    paginate: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            page: number;
            rowsPerPage: number | undefined;
        }> & import("type-mapping").ExpectedInput<{
            page: number;
        } & {
            rowsPerPage?: number | undefined;
        }> & import("type-mapping").MappableInput<{
            page: string | number | bigint;
        } & {
            rowsPerPage?: string | number | bigint | undefined;
        }>>;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").ExpectedInput<{
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").MappableInput<{
            rows: {
                metadata: string | {
                    [k: string]: unknown;
                };
                gemId: string | number | bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: string | number | bigint;
                rowsPerPage: string | number | bigint;
                pagesFound: string | number | bigint;
                rowsFound: string | number | bigint;
            };
        }>>;
    }>;
    fetch: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    /**
     * Preserve update comment
     */
    update: import("route-declaration").Route<{
        readonly method: "PUT";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string | undefined;
            name: string | undefined;
        }> & import("type-mapping").ExpectedInput<{
            metadata?: {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }> & import("type-mapping").MappableInput<{
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    /**
     * Preserve delete comment
     */
    delete: import("route-declaration").Route<{
        readonly method: "DELETE";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: undefined;
    }>;
}>;
export declare const create: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: {
                [k: string]: unknown;
            } | undefined;
        }> & import("type-mapping").MappableInput<{
            cutter: string;
            name: string;
        } & {
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    readonly sender: client.AxiosSender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: client.TransformBodyDelegate<any> | undefined;
    readonly onInjectHeader: client.InjectHeaderDelegate<any> | undefined;
    readonly onTransformResponse: client.TransformResponseDelegate<any> | undefined;
}>;
export declare const paginate: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<never>;
        readonly param: undefined;
        readonly query: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            page: number;
            rowsPerPage: number | undefined;
        }> & import("type-mapping").ExpectedInput<{
            page: number;
        } & {
            rowsPerPage?: number | undefined;
        }> & import("type-mapping").MappableInput<{
            page: string | number | bigint;
        } & {
            rowsPerPage?: string | number | bigint | undefined;
        }>>;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").ExpectedInput<{
            rows: {
                metadata: {
                    [k: string]: unknown;
                };
                gemId: bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: number;
                rowsPerPage: number;
                pagesFound: number;
                rowsFound: number;
            };
        }> & import("type-mapping").MappableInput<{
            rows: {
                metadata: string | {
                    [k: string]: unknown;
                };
                gemId: string | number | bigint;
                cutter: string;
                name: string;
            }[];
            info: {
                page: string | number | bigint;
                rowsPerPage: string | number | bigint;
                pagesFound: string | number | bigint;
                rowsFound: string | number | bigint;
            };
        }>>;
    }>;
    readonly sender: client.AxiosSender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: client.TransformBodyDelegate<any> | undefined;
    readonly onInjectHeader: client.InjectHeaderDelegate<any> | undefined;
    readonly onTransformResponse: client.TransformResponseDelegate<any> | undefined;
}>;
export declare const fetch: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: import("route-declaration").Method.Contextual;
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    readonly sender: client.AxiosSender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: client.TransformBodyDelegate<any> | undefined;
    readonly onInjectHeader: client.InjectHeaderDelegate<any> | undefined;
    readonly onTransformResponse: client.TransformResponseDelegate<any> | undefined;
}>;
export declare const update: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: "PUT";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            } | undefined;
            cutter: string | undefined;
            name: string | undefined;
        }> & import("type-mapping").ExpectedInput<{
            metadata?: {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }> & import("type-mapping").MappableInput<{
            metadata?: string | {
                [k: string]: unknown;
            } | undefined;
            cutter?: string | undefined;
            name?: string | undefined;
        }>>;
        readonly header: undefined;
        readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").ExpectedInput<{
            metadata: {
                [k: string]: unknown;
            };
            gemId: bigint;
            cutter: string;
            name: string;
        }> & import("type-mapping").MappableInput<{
            metadata: string | {
                [k: string]: unknown;
            };
            gemId: string | number | bigint;
            cutter: string;
            name: string;
        }>>;
    }>;
    readonly sender: client.AxiosSender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: client.TransformBodyDelegate<any> | undefined;
    readonly onInjectHeader: client.InjectHeaderDelegate<any> | undefined;
    readonly onTransformResponse: client.TransformResponseDelegate<any> | undefined;
}>;
export declare const del: client.Request<{
    readonly route: import("route-declaration").Route<{
        readonly method: "DELETE";
        readonly path: import("route-declaration").Path<"gemId">;
        readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
            gemId: bigint;
        }> & import("type-mapping").ExpectedInput<{
            gemId: bigint;
        }> & import("type-mapping").MappableInput<{
            gemId: string | number | bigint;
        }>>;
        readonly query: undefined;
        readonly body: undefined;
        readonly header: undefined;
        readonly response: undefined;
    }>;
    readonly sender: client.AxiosSender;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly non2xxDelegates: {};
    readonly onTransformBody: client.TransformBodyDelegate<any> | undefined;
    readonly onInjectHeader: client.InjectHeaderDelegate<any> | undefined;
    readonly onTransformResponse: client.TransformResponseDelegate<any> | undefined;
}>;
