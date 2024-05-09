import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { expensesRoutes } from "@server/routes/expenses";

const app = new Hono();

/* ------------------------------- Middleware ------------------------------- */
// Set up Hono's built-in request logger middleware
app.use("*", logger());

/* --------------------------------- Routes --------------------------------- */
// API Routes
const apiRoutes = app.basePath("/api").route("/expenses", expensesRoutes);

/* --------------------------------- Static --------------------------------- */
app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;

/* ------------------------------- RPC Exports ------------------------------ */
export type APIRoutes = typeof apiRoutes;
