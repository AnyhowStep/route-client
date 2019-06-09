import * as client from "../../../../../dist";
export declare const sendResult: Promise<client.SendResult & {
    status: 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226;
    responseBody: {
        description: string;
        name: string;
        birdId: bigint;
        imageUrl: string | null;
    };
}>;
