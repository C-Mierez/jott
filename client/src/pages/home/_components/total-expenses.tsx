import { useEffect, useState } from "react";

export default function TotalExpenses() {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        async function fetchTotal() {
            const res = await fetch("/api/expenses/total");
            const data = await res.json();
            setTotal(data.total);
        }

        fetchTotal();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full mb-6">
            <h3>Expenses</h3>
            <div>{total}</div>
        </div>
    );
}
