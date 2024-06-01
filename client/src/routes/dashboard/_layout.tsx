import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_layout")({
    component: DashboardLayout,
});

function DashboardLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

function Header() {
    return (
        <header>
            <nav className="w-full select-none pl-10 h-32 border-b border-border/20">
                <ul className="h-full grid grid-cols-8 ">
                    <li className="col-span-2 [&>a]:size-full [&>a]:grid [&>a]:justify-items-start [&>a]:items-center border-r border-border/20 ">
                        <Link to="/" className="text-5xl font-black">
                            Jott
                        </Link>
                    </li>
                    <li aria-hidden className="col-span-3"></li>
                    <NavItem>
                        <Link to="/">Manage</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard/expenses">Expenses</Link>
                    </NavItem>
                    <NavItem>
                        <Link
                            to="/dashboard"
                            activeOptions={{
                                exact: true,
                            }}
                        >
                            Dashboard
                        </Link>
                    </NavItem>
                </ul>
            </nav>
        </header>
    );
}

function NavItem({ children }: { children: React.ReactNode }) {
    return (
        <li className=" [&>a]:size-full [&>a]:grid [&>a]:place-items-center border-l border-border/20 navItem">
            {children}
        </li>
    );
}
