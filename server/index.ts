import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoutes } from "~/routes/expenses";

const server = new Hono();

// Set up Hono's built-in request logger middleware
server.use("*", logger());

server.get("/test", (c) => {
    return c.json({ message: "test" });
});

server.route("api/expenses", expensesRoutes);

export default server;
