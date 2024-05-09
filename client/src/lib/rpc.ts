import { hc } from "hono/client";
import { APIRoutes } from "@server/app";

// Create a Hono RPC client to parse the server's API routes
// The URL is / because both services are running on the same origin
export const client = hc<APIRoutes>("/");
