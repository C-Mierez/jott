import { z } from "zod";

export type Expense = z.infer<typeof expenseSchema>;

export const expenseSchema = z.object({
    id: z.number().int().positive().min(0),
    title: z.string().min(3).max(30),
    amount: z.number(),
});

export const createExpenseSchema = expenseSchema.omit({ id: true });
