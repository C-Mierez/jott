import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/")({
    component: DashboardPage,
});

function DashboardPage() {
    return <div className="grid grid-rows-2 h-full place-items-center ">Dashboard</div>;
}
