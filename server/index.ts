import app from "./app";

const server = Bun.serve({
    port: process.env.PORT ?? 3000,
    // Set up the Bun server to use implementation we build using Hono
    fetch: app.fetch,
});

console.log("Server started. Running on port: ", server.port);
