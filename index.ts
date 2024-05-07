import server from "./server";

Bun.serve({
    // Set up the Bun server to use implementation we build using Hono
    fetch: server.fetch,
});

console.log("Server started.");
