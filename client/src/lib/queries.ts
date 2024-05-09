import { api } from "./rpc";

export default async function getTotalExpenses() {
    const res = await api.expenses.total.$get();

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return await res.json();
}
