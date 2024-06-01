import { createLazyFileRoute } from "@tanstack/react-router";

import AllExpenses from "./-components/all-expenses";
import CreateExpense from "./-components/create-expense";

export const Route = createLazyFileRoute("/dashboard/_layout/expenses")({
    component: ExpensesPage,
});

function ExpensesPage() {
    return (
        <main className="pt-10">
            <section>
                <CreateExpense />
            </section>
            <section className="px-10">
                <AllExpenses />
            </section>
        </main>
    );
}
