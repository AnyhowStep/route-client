import * as client from "../../../../../dist";
export declare const sendResult: Promise<client.SendResult & {
    status: client.HttpStatusCode2xx;
    responseBody: {
        description: string;
        name: string;
        birdId: bigint;
        imageUrl: string | null;
    };
}>;
