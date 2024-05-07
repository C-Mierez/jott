import app from "./app";

Bun.serve({
    // Set up the Bun server to use implementation we build using Hono
    fetch: app.fetch,
});

console.log("Server started.");
