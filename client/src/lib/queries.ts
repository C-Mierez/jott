import { api } from "./rpc";

export async function getTotalExpenses() {
    const res = await api.expenses.total.$get();

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}

export async function getAllExpenses() {
    const res = await api.expenses.$get();

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}
