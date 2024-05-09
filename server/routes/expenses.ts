import { Hono } from "hono";
import { createExpenseSchema, type Expense } from "@server/schemas/expense";

import { zValidator } from "@hono/zod-validator";

const fakeExpenses: Expense[] = [
    { id: 1, title: "Rent", amount: 1000 },
    { id: 2, title: "Groceries", amount: 100 },
    { id: 3, title: "Gas", amount: 50 },
];

export const expensesRoutes = new Hono()
    .get("/", (c) => {
        return c.json({ message: fakeExpenses });
    })

    .post("/", zValidator("json", createExpenseSchema), (c) => {
        const expense = c.req.valid("json");

        // Generate a new ID for the expense
        fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 });

        return c.json(expense);
    })

    // Validation is needed on the url parameter as well
    .get("/:id{[0-9]+}", (c) => {
        const id = Number.parseInt(c.req.param("id"));
        const expense = fakeExpenses.find((e) => e.id === id);
        if (!expense) {
            return c.notFound();
        }
        return c.json(expense);
    })

    .delete("/:id{[0-9]+}", (c) => {
        const id = Number.parseInt(c.req.param("id"));
        const index = fakeExpenses.findIndex((e) => e.id === id);
        if (index === -1) {
            return c.notFound();
        }
        const deleted = fakeExpenses.splice(index, 1)[0];
        return c.json({
            expense: deleted,
        });
    })

    // Get the total amount of expenses
    .get("/total", (c) => {
        const total = fakeExpenses.reduce((e, c) => {
            return e + c.amount;
        }, 0);
        return c.json({ total });
    });
// TODO
// put
