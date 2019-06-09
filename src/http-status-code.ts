import * as tm from "type-mapping";

/**
    Non-exhaustive list. Best-effort attempt.
*/
export enum HttpStatusCode2xx {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,
}
const httpStatusCode2xxValues = tm.EnumUtil.getValues(HttpStatusCode2xx);
export function isHttpStatusCode2xx (x : number) : x is HttpStatusCode2xx {
    return httpStatusCode2xxValues.indexOf(x) >= 0;
}
/**
    Non-exhaustive list. Best-effort attempt.
*/
export enum HttpStatusCodeNon2xx {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,

    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,

    BAD_REQUEST = 400,
    /**
        Synonym for BAD_REQUEST
    */
    SYNTACTIC_ERROR = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    IM_A_TEAPOT = 418,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    SEMANTIC_ERROR = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    CONNECTION_CLOSED_WITHOUT_RESPONSE = 444,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    CLIENT_CLOSED_REQUEST = 499,

    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511,
    NETWORK_CONNECT_TIMEOUT_ERROR = 599,
}
const httpStatusCodeNon2xxValues = tm.EnumUtil.getValues(HttpStatusCodeNon2xx);
export function isHttpStatusCodeNon2xx (x : number) : x is HttpStatusCodeNon2xx {
    return httpStatusCodeNon2xxValues.indexOf(x) >= 0;
}
/**
    Non-exhaustive list. Best-effort attempt.
*/
export enum HttpStatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,

    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,

    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,

    BAD_REQUEST = 400,
    /**
        Synonym for BAD_REQUEST
    */
    SYNTACTIC_ERROR = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    IM_A_TEAPOT = 418,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    SEMANTIC_ERROR = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    CONNECTION_CLOSED_WITHOUT_RESPONSE = 444,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    CLIENT_CLOSED_REQUEST = 499,

    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511,
    NETWORK_CONNECT_TIMEOUT_ERROR = 599,
}
const httpStatusCodeValues = tm.EnumUtil.getValues(HttpStatusCode);
export function isHttpStatusCode (x : number) : x is HttpStatusCode {
    return httpStatusCodeValues.indexOf(x) >= 0;
}