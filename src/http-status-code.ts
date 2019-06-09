/*
    File generated with `npm run generate-http-status-code`
    https://github.com/microsoft/TypeScript/issues/31834
*/
import * as tm from "type-mapping";

/**
    Non-exhaustive list. Best-effort attempt.
*/
export namespace HttpStatusCode2xx {
    export const OK = 200;
    export type OK = typeof OK;
    export const CREATED = 201;
    export type CREATED = typeof CREATED;
    export const ACCEPTED = 202;
    export type ACCEPTED = typeof ACCEPTED;
    export const NON_AUTHORITATIVE_INFORMATION = 203;
    export type NON_AUTHORITATIVE_INFORMATION = typeof NON_AUTHORITATIVE_INFORMATION;
    export const NO_CONTENT = 204;
    export type NO_CONTENT = typeof NO_CONTENT;
    export const RESET_CONTENT = 205;
    export type RESET_CONTENT = typeof RESET_CONTENT;
    export const PARTIAL_CONTENT = 206;
    export type PARTIAL_CONTENT = typeof PARTIAL_CONTENT;
    export const MULTI_STATUS = 207;
    export type MULTI_STATUS = typeof MULTI_STATUS;
    export const ALREADY_REPORTED = 208;
    export type ALREADY_REPORTED = typeof ALREADY_REPORTED;
    export const IM_USED = 226;
    export type IM_USED = typeof IM_USED;
}
export type HttpStatusCode2xx = (
    | HttpStatusCode2xx.OK
    | HttpStatusCode2xx.CREATED
    | HttpStatusCode2xx.ACCEPTED
    | HttpStatusCode2xx.NON_AUTHORITATIVE_INFORMATION
    | HttpStatusCode2xx.NO_CONTENT
    | HttpStatusCode2xx.RESET_CONTENT
    | HttpStatusCode2xx.PARTIAL_CONTENT
    | HttpStatusCode2xx.MULTI_STATUS
    | HttpStatusCode2xx.ALREADY_REPORTED
    | HttpStatusCode2xx.IM_USED
);

/**
    Non-exhaustive list. Best-effort attempt.
*/
export namespace HttpStatusCodeNon2xx {
    export const CONTINUE = 100;
    export type CONTINUE = typeof CONTINUE;
    export const SWITCHING_PROTOCOLS = 101;
    export type SWITCHING_PROTOCOLS = typeof SWITCHING_PROTOCOLS;
    export const PROCESSING = 102;
    export type PROCESSING = typeof PROCESSING;
    export const MULTIPLE_CHOICES = 300;
    export type MULTIPLE_CHOICES = typeof MULTIPLE_CHOICES;
    export const MOVED_PERMANENTLY = 301;
    export type MOVED_PERMANENTLY = typeof MOVED_PERMANENTLY;
    export const FOUND = 302;
    export type FOUND = typeof FOUND;
    export const SEE_OTHER = 303;
    export type SEE_OTHER = typeof SEE_OTHER;
    export const NOT_MODIFIED = 304;
    export type NOT_MODIFIED = typeof NOT_MODIFIED;
    export const USE_PROXY = 305;
    export type USE_PROXY = typeof USE_PROXY;
    export const TEMPORARY_REDIRECT = 307;
    export type TEMPORARY_REDIRECT = typeof TEMPORARY_REDIRECT;
    export const PERMANENT_REDIRECT = 308;
    export type PERMANENT_REDIRECT = typeof PERMANENT_REDIRECT;
    export const BAD_REQUEST = 400;
    export type BAD_REQUEST = typeof BAD_REQUEST;
    /**
        Synonym for BAD_REQUEST
    */
    export const SYNTACTIC_ERROR = 400;
    export type SYNTACTIC_ERROR = typeof SYNTACTIC_ERROR;
    export const UNAUTHORIZED = 401;
    export type UNAUTHORIZED = typeof UNAUTHORIZED;
    export const PAYMENT_REQUIRED = 402;
    export type PAYMENT_REQUIRED = typeof PAYMENT_REQUIRED;
    export const FORBIDDEN = 403;
    export type FORBIDDEN = typeof FORBIDDEN;
    export const NOT_FOUND = 404;
    export type NOT_FOUND = typeof NOT_FOUND;
    export const METHOD_NOT_ALLOWED = 405;
    export type METHOD_NOT_ALLOWED = typeof METHOD_NOT_ALLOWED;
    export const NOT_ACCEPTABLE = 406;
    export type NOT_ACCEPTABLE = typeof NOT_ACCEPTABLE;
    export const PROXY_AUTHENTICATION_REQUIRED = 407;
    export type PROXY_AUTHENTICATION_REQUIRED = typeof PROXY_AUTHENTICATION_REQUIRED;
    export const REQUEST_TIMEOUT = 408;
    export type REQUEST_TIMEOUT = typeof REQUEST_TIMEOUT;
    export const CONFLICT = 409;
    export type CONFLICT = typeof CONFLICT;
    export const GONE = 410;
    export type GONE = typeof GONE;
    export const LENGTH_REQUIRED = 411;
    export type LENGTH_REQUIRED = typeof LENGTH_REQUIRED;
    export const PRECONDITION_FAILED = 412;
    export type PRECONDITION_FAILED = typeof PRECONDITION_FAILED;
    export const PAYLOAD_TOO_LARGE = 413;
    export type PAYLOAD_TOO_LARGE = typeof PAYLOAD_TOO_LARGE;
    export const REQUEST_URI_TOO_LONG = 414;
    export type REQUEST_URI_TOO_LONG = typeof REQUEST_URI_TOO_LONG;
    export const UNSUPPORTED_MEDIA_TYPE = 415;
    export type UNSUPPORTED_MEDIA_TYPE = typeof UNSUPPORTED_MEDIA_TYPE;
    export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    export type REQUESTED_RANGE_NOT_SATISFIABLE = typeof REQUESTED_RANGE_NOT_SATISFIABLE;
    export const EXPECTATION_FAILED = 417;
    export type EXPECTATION_FAILED = typeof EXPECTATION_FAILED;
    export const IM_A_TEAPOT = 418;
    export type IM_A_TEAPOT = typeof IM_A_TEAPOT;
    export const MISDIRECTED_REQUEST = 421;
    export type MISDIRECTED_REQUEST = typeof MISDIRECTED_REQUEST;
    export const UNPROCESSABLE_ENTITY = 422;
    export type UNPROCESSABLE_ENTITY = typeof UNPROCESSABLE_ENTITY;
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    export const SEMANTIC_ERROR = 422;
    export type SEMANTIC_ERROR = typeof SEMANTIC_ERROR;
    export const LOCKED = 423;
    export type LOCKED = typeof LOCKED;
    export const FAILED_DEPENDENCY = 424;
    export type FAILED_DEPENDENCY = typeof FAILED_DEPENDENCY;
    export const UPGRADE_REQUIRED = 426;
    export type UPGRADE_REQUIRED = typeof UPGRADE_REQUIRED;
    export const PRECONDITION_REQUIRED = 428;
    export type PRECONDITION_REQUIRED = typeof PRECONDITION_REQUIRED;
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    export const TOO_MANY_REQUESTS = 429;
    export type TOO_MANY_REQUESTS = typeof TOO_MANY_REQUESTS;
    export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    export type REQUEST_HEADER_FIELDS_TOO_LARGE = typeof REQUEST_HEADER_FIELDS_TOO_LARGE;
    export const CONNECTION_CLOSED_WITHOUT_RESPONSE = 444;
    export type CONNECTION_CLOSED_WITHOUT_RESPONSE = typeof CONNECTION_CLOSED_WITHOUT_RESPONSE;
    export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
    export type UNAVAILABLE_FOR_LEGAL_REASONS = typeof UNAVAILABLE_FOR_LEGAL_REASONS;
    export const CLIENT_CLOSED_REQUEST = 499;
    export type CLIENT_CLOSED_REQUEST = typeof CLIENT_CLOSED_REQUEST;
    export const INTERNAL_SERVER_ERROR = 500;
    export type INTERNAL_SERVER_ERROR = typeof INTERNAL_SERVER_ERROR;
    export const NOT_IMPLEMENTED = 501;
    export type NOT_IMPLEMENTED = typeof NOT_IMPLEMENTED;
    export const BAD_GATEWAY = 502;
    export type BAD_GATEWAY = typeof BAD_GATEWAY;
    export const SERVICE_UNAVAILABLE = 503;
    export type SERVICE_UNAVAILABLE = typeof SERVICE_UNAVAILABLE;
    export const GATEWAY_TIMEOUT = 504;
    export type GATEWAY_TIMEOUT = typeof GATEWAY_TIMEOUT;
    export const HTTP_VERSION_NOT_SUPPORTED = 505;
    export type HTTP_VERSION_NOT_SUPPORTED = typeof HTTP_VERSION_NOT_SUPPORTED;
    export const VARIANT_ALSO_NEGOTIATES = 506;
    export type VARIANT_ALSO_NEGOTIATES = typeof VARIANT_ALSO_NEGOTIATES;
    export const INSUFFICIENT_STORAGE = 507;
    export type INSUFFICIENT_STORAGE = typeof INSUFFICIENT_STORAGE;
    export const LOOP_DETECTED = 508;
    export type LOOP_DETECTED = typeof LOOP_DETECTED;
    export const NOT_EXTENDED = 510;
    export type NOT_EXTENDED = typeof NOT_EXTENDED;
    export const NETWORK_AUTHENTICATION_REQUIRED = 511;
    export type NETWORK_AUTHENTICATION_REQUIRED = typeof NETWORK_AUTHENTICATION_REQUIRED;
    export const NETWORK_CONNECT_TIMEOUT_ERROR = 599;
    export type NETWORK_CONNECT_TIMEOUT_ERROR = typeof NETWORK_CONNECT_TIMEOUT_ERROR;
}
export type HttpStatusCodeNon2xx = (
    | HttpStatusCodeNon2xx.CONTINUE
    | HttpStatusCodeNon2xx.SWITCHING_PROTOCOLS
    | HttpStatusCodeNon2xx.PROCESSING
    | HttpStatusCodeNon2xx.MULTIPLE_CHOICES
    | HttpStatusCodeNon2xx.MOVED_PERMANENTLY
    | HttpStatusCodeNon2xx.FOUND
    | HttpStatusCodeNon2xx.SEE_OTHER
    | HttpStatusCodeNon2xx.NOT_MODIFIED
    | HttpStatusCodeNon2xx.USE_PROXY
    | HttpStatusCodeNon2xx.TEMPORARY_REDIRECT
    | HttpStatusCodeNon2xx.PERMANENT_REDIRECT
    | HttpStatusCodeNon2xx.BAD_REQUEST
    /**
        Synonym for BAD_REQUEST
    */
    | HttpStatusCodeNon2xx.SYNTACTIC_ERROR
    | HttpStatusCodeNon2xx.UNAUTHORIZED
    | HttpStatusCodeNon2xx.PAYMENT_REQUIRED
    | HttpStatusCodeNon2xx.FORBIDDEN
    | HttpStatusCodeNon2xx.NOT_FOUND
    | HttpStatusCodeNon2xx.METHOD_NOT_ALLOWED
    | HttpStatusCodeNon2xx.NOT_ACCEPTABLE
    | HttpStatusCodeNon2xx.PROXY_AUTHENTICATION_REQUIRED
    | HttpStatusCodeNon2xx.REQUEST_TIMEOUT
    | HttpStatusCodeNon2xx.CONFLICT
    | HttpStatusCodeNon2xx.GONE
    | HttpStatusCodeNon2xx.LENGTH_REQUIRED
    | HttpStatusCodeNon2xx.PRECONDITION_FAILED
    | HttpStatusCodeNon2xx.PAYLOAD_TOO_LARGE
    | HttpStatusCodeNon2xx.REQUEST_URI_TOO_LONG
    | HttpStatusCodeNon2xx.UNSUPPORTED_MEDIA_TYPE
    | HttpStatusCodeNon2xx.REQUESTED_RANGE_NOT_SATISFIABLE
    | HttpStatusCodeNon2xx.EXPECTATION_FAILED
    | HttpStatusCodeNon2xx.IM_A_TEAPOT
    | HttpStatusCodeNon2xx.MISDIRECTED_REQUEST
    | HttpStatusCodeNon2xx.UNPROCESSABLE_ENTITY
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    | HttpStatusCodeNon2xx.SEMANTIC_ERROR
    | HttpStatusCodeNon2xx.LOCKED
    | HttpStatusCodeNon2xx.FAILED_DEPENDENCY
    | HttpStatusCodeNon2xx.UPGRADE_REQUIRED
    | HttpStatusCodeNon2xx.PRECONDITION_REQUIRED
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    | HttpStatusCodeNon2xx.TOO_MANY_REQUESTS
    | HttpStatusCodeNon2xx.REQUEST_HEADER_FIELDS_TOO_LARGE
    | HttpStatusCodeNon2xx.CONNECTION_CLOSED_WITHOUT_RESPONSE
    | HttpStatusCodeNon2xx.UNAVAILABLE_FOR_LEGAL_REASONS
    | HttpStatusCodeNon2xx.CLIENT_CLOSED_REQUEST
    | HttpStatusCodeNon2xx.INTERNAL_SERVER_ERROR
    | HttpStatusCodeNon2xx.NOT_IMPLEMENTED
    | HttpStatusCodeNon2xx.BAD_GATEWAY
    | HttpStatusCodeNon2xx.SERVICE_UNAVAILABLE
    | HttpStatusCodeNon2xx.GATEWAY_TIMEOUT
    | HttpStatusCodeNon2xx.HTTP_VERSION_NOT_SUPPORTED
    | HttpStatusCodeNon2xx.VARIANT_ALSO_NEGOTIATES
    | HttpStatusCodeNon2xx.INSUFFICIENT_STORAGE
    | HttpStatusCodeNon2xx.LOOP_DETECTED
    | HttpStatusCodeNon2xx.NOT_EXTENDED
    | HttpStatusCodeNon2xx.NETWORK_AUTHENTICATION_REQUIRED
    | HttpStatusCodeNon2xx.NETWORK_CONNECT_TIMEOUT_ERROR
);

/**
    Non-exhaustive list. Best-effort attempt.
*/
export namespace HttpStatusCode {
    export const CONTINUE = 100;
    export type CONTINUE = typeof CONTINUE;
    export const SWITCHING_PROTOCOLS = 101;
    export type SWITCHING_PROTOCOLS = typeof SWITCHING_PROTOCOLS;
    export const PROCESSING = 102;
    export type PROCESSING = typeof PROCESSING;
    export const OK = 200;
    export type OK = typeof OK;
    export const CREATED = 201;
    export type CREATED = typeof CREATED;
    export const ACCEPTED = 202;
    export type ACCEPTED = typeof ACCEPTED;
    export const NON_AUTHORITATIVE_INFORMATION = 203;
    export type NON_AUTHORITATIVE_INFORMATION = typeof NON_AUTHORITATIVE_INFORMATION;
    export const NO_CONTENT = 204;
    export type NO_CONTENT = typeof NO_CONTENT;
    export const RESET_CONTENT = 205;
    export type RESET_CONTENT = typeof RESET_CONTENT;
    export const PARTIAL_CONTENT = 206;
    export type PARTIAL_CONTENT = typeof PARTIAL_CONTENT;
    export const MULTI_STATUS = 207;
    export type MULTI_STATUS = typeof MULTI_STATUS;
    export const ALREADY_REPORTED = 208;
    export type ALREADY_REPORTED = typeof ALREADY_REPORTED;
    export const IM_USED = 226;
    export type IM_USED = typeof IM_USED;
    export const MULTIPLE_CHOICES = 300;
    export type MULTIPLE_CHOICES = typeof MULTIPLE_CHOICES;
    export const MOVED_PERMANENTLY = 301;
    export type MOVED_PERMANENTLY = typeof MOVED_PERMANENTLY;
    export const FOUND = 302;
    export type FOUND = typeof FOUND;
    export const SEE_OTHER = 303;
    export type SEE_OTHER = typeof SEE_OTHER;
    export const NOT_MODIFIED = 304;
    export type NOT_MODIFIED = typeof NOT_MODIFIED;
    export const USE_PROXY = 305;
    export type USE_PROXY = typeof USE_PROXY;
    export const TEMPORARY_REDIRECT = 307;
    export type TEMPORARY_REDIRECT = typeof TEMPORARY_REDIRECT;
    export const PERMANENT_REDIRECT = 308;
    export type PERMANENT_REDIRECT = typeof PERMANENT_REDIRECT;
    export const BAD_REQUEST = 400;
    export type BAD_REQUEST = typeof BAD_REQUEST;
    /**
        Synonym for BAD_REQUEST
    */
    export const SYNTACTIC_ERROR = 400;
    export type SYNTACTIC_ERROR = typeof SYNTACTIC_ERROR;
    export const UNAUTHORIZED = 401;
    export type UNAUTHORIZED = typeof UNAUTHORIZED;
    export const PAYMENT_REQUIRED = 402;
    export type PAYMENT_REQUIRED = typeof PAYMENT_REQUIRED;
    export const FORBIDDEN = 403;
    export type FORBIDDEN = typeof FORBIDDEN;
    export const NOT_FOUND = 404;
    export type NOT_FOUND = typeof NOT_FOUND;
    export const METHOD_NOT_ALLOWED = 405;
    export type METHOD_NOT_ALLOWED = typeof METHOD_NOT_ALLOWED;
    export const NOT_ACCEPTABLE = 406;
    export type NOT_ACCEPTABLE = typeof NOT_ACCEPTABLE;
    export const PROXY_AUTHENTICATION_REQUIRED = 407;
    export type PROXY_AUTHENTICATION_REQUIRED = typeof PROXY_AUTHENTICATION_REQUIRED;
    export const REQUEST_TIMEOUT = 408;
    export type REQUEST_TIMEOUT = typeof REQUEST_TIMEOUT;
    export const CONFLICT = 409;
    export type CONFLICT = typeof CONFLICT;
    export const GONE = 410;
    export type GONE = typeof GONE;
    export const LENGTH_REQUIRED = 411;
    export type LENGTH_REQUIRED = typeof LENGTH_REQUIRED;
    export const PRECONDITION_FAILED = 412;
    export type PRECONDITION_FAILED = typeof PRECONDITION_FAILED;
    export const PAYLOAD_TOO_LARGE = 413;
    export type PAYLOAD_TOO_LARGE = typeof PAYLOAD_TOO_LARGE;
    export const REQUEST_URI_TOO_LONG = 414;
    export type REQUEST_URI_TOO_LONG = typeof REQUEST_URI_TOO_LONG;
    export const UNSUPPORTED_MEDIA_TYPE = 415;
    export type UNSUPPORTED_MEDIA_TYPE = typeof UNSUPPORTED_MEDIA_TYPE;
    export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    export type REQUESTED_RANGE_NOT_SATISFIABLE = typeof REQUESTED_RANGE_NOT_SATISFIABLE;
    export const EXPECTATION_FAILED = 417;
    export type EXPECTATION_FAILED = typeof EXPECTATION_FAILED;
    export const IM_A_TEAPOT = 418;
    export type IM_A_TEAPOT = typeof IM_A_TEAPOT;
    export const MISDIRECTED_REQUEST = 421;
    export type MISDIRECTED_REQUEST = typeof MISDIRECTED_REQUEST;
    export const UNPROCESSABLE_ENTITY = 422;
    export type UNPROCESSABLE_ENTITY = typeof UNPROCESSABLE_ENTITY;
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    export const SEMANTIC_ERROR = 422;
    export type SEMANTIC_ERROR = typeof SEMANTIC_ERROR;
    export const LOCKED = 423;
    export type LOCKED = typeof LOCKED;
    export const FAILED_DEPENDENCY = 424;
    export type FAILED_DEPENDENCY = typeof FAILED_DEPENDENCY;
    export const UPGRADE_REQUIRED = 426;
    export type UPGRADE_REQUIRED = typeof UPGRADE_REQUIRED;
    export const PRECONDITION_REQUIRED = 428;
    export type PRECONDITION_REQUIRED = typeof PRECONDITION_REQUIRED;
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    export const TOO_MANY_REQUESTS = 429;
    export type TOO_MANY_REQUESTS = typeof TOO_MANY_REQUESTS;
    export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    export type REQUEST_HEADER_FIELDS_TOO_LARGE = typeof REQUEST_HEADER_FIELDS_TOO_LARGE;
    export const CONNECTION_CLOSED_WITHOUT_RESPONSE = 444;
    export type CONNECTION_CLOSED_WITHOUT_RESPONSE = typeof CONNECTION_CLOSED_WITHOUT_RESPONSE;
    export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
    export type UNAVAILABLE_FOR_LEGAL_REASONS = typeof UNAVAILABLE_FOR_LEGAL_REASONS;
    export const CLIENT_CLOSED_REQUEST = 499;
    export type CLIENT_CLOSED_REQUEST = typeof CLIENT_CLOSED_REQUEST;
    export const INTERNAL_SERVER_ERROR = 500;
    export type INTERNAL_SERVER_ERROR = typeof INTERNAL_SERVER_ERROR;
    export const NOT_IMPLEMENTED = 501;
    export type NOT_IMPLEMENTED = typeof NOT_IMPLEMENTED;
    export const BAD_GATEWAY = 502;
    export type BAD_GATEWAY = typeof BAD_GATEWAY;
    export const SERVICE_UNAVAILABLE = 503;
    export type SERVICE_UNAVAILABLE = typeof SERVICE_UNAVAILABLE;
    export const GATEWAY_TIMEOUT = 504;
    export type GATEWAY_TIMEOUT = typeof GATEWAY_TIMEOUT;
    export const HTTP_VERSION_NOT_SUPPORTED = 505;
    export type HTTP_VERSION_NOT_SUPPORTED = typeof HTTP_VERSION_NOT_SUPPORTED;
    export const VARIANT_ALSO_NEGOTIATES = 506;
    export type VARIANT_ALSO_NEGOTIATES = typeof VARIANT_ALSO_NEGOTIATES;
    export const INSUFFICIENT_STORAGE = 507;
    export type INSUFFICIENT_STORAGE = typeof INSUFFICIENT_STORAGE;
    export const LOOP_DETECTED = 508;
    export type LOOP_DETECTED = typeof LOOP_DETECTED;
    export const NOT_EXTENDED = 510;
    export type NOT_EXTENDED = typeof NOT_EXTENDED;
    export const NETWORK_AUTHENTICATION_REQUIRED = 511;
    export type NETWORK_AUTHENTICATION_REQUIRED = typeof NETWORK_AUTHENTICATION_REQUIRED;
    export const NETWORK_CONNECT_TIMEOUT_ERROR = 599;
    export type NETWORK_CONNECT_TIMEOUT_ERROR = typeof NETWORK_CONNECT_TIMEOUT_ERROR;
}
export type HttpStatusCode = (
    | HttpStatusCode.CONTINUE
    | HttpStatusCode.SWITCHING_PROTOCOLS
    | HttpStatusCode.PROCESSING
    | HttpStatusCode.OK
    | HttpStatusCode.CREATED
    | HttpStatusCode.ACCEPTED
    | HttpStatusCode.NON_AUTHORITATIVE_INFORMATION
    | HttpStatusCode.NO_CONTENT
    | HttpStatusCode.RESET_CONTENT
    | HttpStatusCode.PARTIAL_CONTENT
    | HttpStatusCode.MULTI_STATUS
    | HttpStatusCode.ALREADY_REPORTED
    | HttpStatusCode.IM_USED
    | HttpStatusCode.MULTIPLE_CHOICES
    | HttpStatusCode.MOVED_PERMANENTLY
    | HttpStatusCode.FOUND
    | HttpStatusCode.SEE_OTHER
    | HttpStatusCode.NOT_MODIFIED
    | HttpStatusCode.USE_PROXY
    | HttpStatusCode.TEMPORARY_REDIRECT
    | HttpStatusCode.PERMANENT_REDIRECT
    | HttpStatusCode.BAD_REQUEST
    /**
        Synonym for BAD_REQUEST
    */
    | HttpStatusCode.SYNTACTIC_ERROR
    | HttpStatusCode.UNAUTHORIZED
    | HttpStatusCode.PAYMENT_REQUIRED
    | HttpStatusCode.FORBIDDEN
    | HttpStatusCode.NOT_FOUND
    | HttpStatusCode.METHOD_NOT_ALLOWED
    | HttpStatusCode.NOT_ACCEPTABLE
    | HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED
    | HttpStatusCode.REQUEST_TIMEOUT
    | HttpStatusCode.CONFLICT
    | HttpStatusCode.GONE
    | HttpStatusCode.LENGTH_REQUIRED
    | HttpStatusCode.PRECONDITION_FAILED
    | HttpStatusCode.PAYLOAD_TOO_LARGE
    | HttpStatusCode.REQUEST_URI_TOO_LONG
    | HttpStatusCode.UNSUPPORTED_MEDIA_TYPE
    | HttpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE
    | HttpStatusCode.EXPECTATION_FAILED
    | HttpStatusCode.IM_A_TEAPOT
    | HttpStatusCode.MISDIRECTED_REQUEST
    | HttpStatusCode.UNPROCESSABLE_ENTITY
    /**
        Synonym for UNPROCESSABLE_ENTITY
        The format is correct (e.g. JSON) but the data makes no sense
        For example, depositing a negative amount into a bank account
    */
    | HttpStatusCode.SEMANTIC_ERROR
    | HttpStatusCode.LOCKED
    | HttpStatusCode.FAILED_DEPENDENCY
    | HttpStatusCode.UPGRADE_REQUIRED
    | HttpStatusCode.PRECONDITION_REQUIRED
    /**
        Too many requests have been made in a period of time
        Wait a while before trying again.
        Maybe see the "Retry-After" header for how long to wait;
        the header may or may not be set, though.
    */
    | HttpStatusCode.TOO_MANY_REQUESTS
    | HttpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE
    | HttpStatusCode.CONNECTION_CLOSED_WITHOUT_RESPONSE
    | HttpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS
    | HttpStatusCode.CLIENT_CLOSED_REQUEST
    | HttpStatusCode.INTERNAL_SERVER_ERROR
    | HttpStatusCode.NOT_IMPLEMENTED
    | HttpStatusCode.BAD_GATEWAY
    | HttpStatusCode.SERVICE_UNAVAILABLE
    | HttpStatusCode.GATEWAY_TIMEOUT
    | HttpStatusCode.HTTP_VERSION_NOT_SUPPORTED
    | HttpStatusCode.VARIANT_ALSO_NEGOTIATES
    | HttpStatusCode.INSUFFICIENT_STORAGE
    | HttpStatusCode.LOOP_DETECTED
    | HttpStatusCode.NOT_EXTENDED
    | HttpStatusCode.NETWORK_AUTHENTICATION_REQUIRED
    | HttpStatusCode.NETWORK_CONNECT_TIMEOUT_ERROR
);

const httpStatusCode2xxValues = tm.EnumUtil.getValues(HttpStatusCode2xx);
export function isHttpStatusCode2xx (x : number) : x is HttpStatusCode2xx {
    return httpStatusCode2xxValues.indexOf(x as any) >= 0;
}
const httpStatusCodeNon2xxValues = tm.EnumUtil.getValues(HttpStatusCodeNon2xx);
export function isHttpStatusCodeNon2xx (x : number) : x is HttpStatusCodeNon2xx {
    return httpStatusCodeNon2xxValues.indexOf(x as any) >= 0;
}
const httpStatusCodeValues = tm.EnumUtil.getValues(HttpStatusCode);
export function isHttpStatusCode (x : number) : x is HttpStatusCode {
    return httpStatusCodeValues.indexOf(x as any) >= 0;
}
