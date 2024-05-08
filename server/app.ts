import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { expensesRoutes } from "~/routes/expenses";

const app = new Hono();

/* ------------------------------- Middleware ------------------------------- */
// Set up Hono's built-in request logger middleware
app.use("*", logger());

/* --------------------------------- Routes --------------------------------- */
app.route("api/expenses", expensesRoutes);

/* --------------------------------- Static --------------------------------- */
app.use("*", serveStatic({ root: "./client/dist" }));
app.use("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
