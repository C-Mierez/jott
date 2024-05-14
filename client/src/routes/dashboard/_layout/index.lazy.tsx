import { createLazyFileRoute } from "@tanstack/react-router";

import TotalExpenses from "./-components/total-expenses";

export const Route = createLazyFileRoute("/dashboard/_layout/")({
    component: DashboardPage,
});

function DashboardPage() {
    return (
        <main className="pt-10">
            <section className="px-10">
                <TotalExpenses />
            </section>
        </main>
    );
}
