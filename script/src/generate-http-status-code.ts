const orderedPairs : [string, string|number, (string)?][] = [
    [
        "CONTINUE",
        "100"
    ],
    [
        "SWITCHING_PROTOCOLS",
        "101"
    ],
    [
        "PROCESSING",
        "102"
    ],
    [
        "OK",
        "200"
    ],
    [
        "CREATED",
        "201"
    ],
    [
        "ACCEPTED",
        "202"
    ],
    [
        "NON_AUTHORITATIVE_INFORMATION",
        "203"
    ],
    [
        "NO_CONTENT",
        "204"
    ],
    [
        "RESET_CONTENT",
        "205"
    ],
    [
        "PARTIAL_CONTENT",
        "206"
    ],
    [
        "MULTI_STATUS",
        "207"
    ],
    [
        "ALREADY_REPORTED",
        "208"
    ],
    [
        "IM_USED",
        "226"
    ],
    [
        "MULTIPLE_CHOICES",
        "300"
    ],
    [
        "MOVED_PERMANENTLY",
        "301"
    ],
    [
        "FOUND",
        "302"
    ],
    [
        "SEE_OTHER",
        "303"
    ],
    [
        "NOT_MODIFIED",
        "304"
    ],
    [
        "USE_PROXY",
        "305"
    ],
    [
        "TEMPORARY_REDIRECT",
        "307"
    ],
    [
        "PERMANENT_REDIRECT",
        "308"
    ],
    [
        "BAD_REQUEST",
        "400"
    ],
    [
        "SYNTACTIC_ERROR",
        "400",
        "Synonym for BAD_REQUEST"
    ],
    [
        "UNAUTHORIZED",
        "401"
    ],
    [
        "PAYMENT_REQUIRED",
        "402"
    ],
    [
        "FORBIDDEN",
        "403"
    ],
    [
        "NOT_FOUND",
        "404"
    ],
    [
        "METHOD_NOT_ALLOWED",
        "405"
    ],
    [
        "NOT_ACCEPTABLE",
        "406"
    ],
    [
        "PROXY_AUTHENTICATION_REQUIRED",
        "407"
    ],
    [
        "REQUEST_TIMEOUT",
        "408"
    ],
    [
        "CONFLICT",
        "409"
    ],
    [
        "GONE",
        "410"
    ],
    [
        "LENGTH_REQUIRED",
        "411"
    ],
    [
        "PRECONDITION_FAILED",
        "412"
    ],
    [
        "PAYLOAD_TOO_LARGE",
        "413"
    ],
    [
        "REQUEST_URI_TOO_LONG",
        "414"
    ],
    [
        "UNSUPPORTED_MEDIA_TYPE",
        "415"
    ],
    [
        "REQUESTED_RANGE_NOT_SATISFIABLE",
        "416"
    ],
    [
        "EXPECTATION_FAILED",
        "417"
    ],
    [
        "IM_A_TEAPOT",
        "418"
    ],
    [
        "MISDIRECTED_REQUEST",
        "421"
    ],
    [
        "UNPROCESSABLE_ENTITY",
        "422"
    ],
    //Synonym
    [
        "SEMANTIC_ERROR",
        "422",
        `Synonym for UNPROCESSABLE_ENTITY
The format is correct (e.g. JSON) but the data makes no sense
For example, depositing a negative amount into a bank account`
    ],
    [
        "LOCKED",
        "423"
    ],
    [
        "FAILED_DEPENDENCY",
        "424"
    ],
    [
        "UPGRADE_REQUIRED",
        "426"
    ],
    [
        "PRECONDITION_REQUIRED",
        "428"
    ],
    [
        "TOO_MANY_REQUESTS",
        "429",
        `Too many requests have been made in a period of time
Wait a while before trying again.
Maybe see the "Retry-After" header for how long to wait;
the header may or may not be set, though.`
    ],
    [
        "REQUEST_HEADER_FIELDS_TOO_LARGE",
        "431"
    ],
    [
        "CONNECTION_CLOSED_WITHOUT_RESPONSE",
        "444"
    ],
    [
        "UNAVAILABLE_FOR_LEGAL_REASONS",
        "451"
    ],
    [
        "CLIENT_CLOSED_REQUEST",
        "499"
    ],
    [
        "INTERNAL_SERVER_ERROR",
        "500"
    ],
    [
        "NOT_IMPLEMENTED",
        "501"
    ],
    [
        "BAD_GATEWAY",
        "502"
    ],
    [
        "SERVICE_UNAVAILABLE",
        "503"
    ],
    [
        "GATEWAY_TIMEOUT",
        "504"
    ],
    [
        "HTTP_VERSION_NOT_SUPPORTED",
        "505"
    ],
    [
        "VARIANT_ALSO_NEGOTIATES",
        "506"
    ],
    [
        "INSUFFICIENT_STORAGE",
        "507"
    ],
    [
        "LOOP_DETECTED",
        "508"
    ],
    [
        "NOT_EXTENDED",
        "510"
    ],
    [
        "NETWORK_AUTHENTICATION_REQUIRED",
        "511"
    ],
    [
        "NETWORK_CONNECT_TIMEOUT_ERROR",
        "599"
    ]
];

function generateEnumStr (enumName : string, orderedPairs : [string, string|number, (string)?][]) {
    const namespaceElements = orderedPairs
        .map(([key, value, comment]) => {
            return [
                ...(
                    comment == undefined ?
                    [] :
                    [
                        `/**`,
                        ...comment
                            .split("\n")
                            .map(s => `    ${s}`),
                        `*/`,
                    ]
                ),
                `export const ${key} = ${value};`,
                `export type ${key} = typeof ${key};`,
            ].join("\n    ")
        })
        .join("\n    ");
    const namespaceStr = `export namespace ${enumName} {\n    ${namespaceElements}\n}`;
    const unionElements = orderedPairs
        .map(([key, _value, comment]) => {

            return [
                ...(
                    comment == undefined ?
                    [] :
                    [
                        `/**`,
                        ...comment
                            .split("\n")
                            .map(s => `    ${s}`),
                        `*/`,
                    ]
                ),
                `| ${enumName}.${key}`
            ].join("\n    ");
        })
        .join("\n    ");
    const unionStr = `export type ${enumName} = (\n    ${unionElements}\n);`;
    return namespaceStr + "\n" + unionStr;
}
const nonExhaustiveListComment = `
/**
    Non-exhaustive list. Best-effort attempt.
*/`;
const str = [
    `
/*
    File generated with \`npm run generate-http-status-code\`
    https://github.com/microsoft/TypeScript/issues/31834
*/
import * as tm from "type-mapping";`,
    nonExhaustiveListComment,
    generateEnumStr(
        "HttpStatusCode2xx",
        orderedPairs.filter(([_key, value]) => {
            return Number(value) >= 200 && Number(value) <= 299;
        })
    ),
    nonExhaustiveListComment,
    generateEnumStr(
        "HttpStatusCodeNon2xx",
        orderedPairs.filter(([_key, value]) => {
            return Number(value) <= 199 || Number(value) >= 300;
        })
    ),
    nonExhaustiveListComment,
    generateEnumStr("HttpStatusCode", orderedPairs),
    `
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
}`
].join("\n");
console.log(str);
//import * as fs from "fs";
//const fluentLibIndexFile = __dirname + "/../../src/fluent-lib/index.ts";
//fs.writeFileSync(fluentLibIndexFile, str);
//console.log("Wrote export to", fluentLibIndexFile);