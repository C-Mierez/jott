import { getTotalExpenses } from "~/lib/queries";

import { useQuery } from "@tanstack/react-query";

export default function TotalExpenses() {
    const { isPending, error, data } = useQuery({
        queryKey: ["get-total-expenses"],
        queryFn: getTotalExpenses,
    });

    return (
        <div className="flex flex-col justify-center items-center w-full mb-6">
            <h3>Expenses</h3>
            {isPending && <p className="text-sm">Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Total: ${data.total}</p>}
        </div>
    );
}
