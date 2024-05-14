import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/_layout")({
    component: HomeLayout,
});

export default function HomeLayout() {
    return (
        <div className="h-[100svh] flex flex-col justify-between">
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

function Footer() {
    return (
        <footer className="w-full text-sm p-4">
            <ul className="flex justify-end gap-3 max-md:flex-col items-center">
                <li>Github</li>
                <li className="max-md:hidden">-</li>
                <li>Twitter</li>
            </ul>
        </footer>
    );
}
