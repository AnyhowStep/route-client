import {route} from "route-declaration";
import * as client from "../../../../../dist";

export const path = client.request(
    route(),
    null as unknown as client.ISender
).getPath();