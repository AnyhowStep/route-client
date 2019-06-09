import {route} from "route-declaration";
import * as client from "../../../../../dist";

client.request(
    route(),
    null as unknown as client.ISender
).setQuery(null as never);

client.request(
    route(),
    null as unknown as client.ISender
).setQuery(null);