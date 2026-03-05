import { useEffect, useState } from "react";
import API from "../../services/api";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incomeRes, expenseRes] = await Promise.all([
          API.get("/api/v1/expense-tracker/incomes/get-incomes"),
          API.get("/api/v1/expense-tracker/expenses/get-expense"),
        ]);

        const combined = [
          ...(incomeRes.data.data || []).map((item) => ({ ...item, type: "Income" })),
          ...(expenseRes.data.data || []).map((item) => ({ ...item, type: "Expense" })),
        ];

        // Sort by date:
        combined.sort((a, b) => new Date(b.date) - new Date(a.date));

        setTransactions(combined);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Filter transactions based on selected type
  const filteredTransactions =
    filter === "All" ? transactions : transactions.filter((t) => t.type === filter);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Transactions</h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {["All", "Income", "Expense"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded font-medium ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {filteredTransactions.length === 0 ? (
          <p>No transactions to display.</p>
        ) : (
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface text-left text-white">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((tx, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    tx.type === "Expense" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  <td className="px-4 py-2">{new Date(tx.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{tx.type}</td>
                  <td className="px-4 py-2 font-semibold">
                    ${Number(tx.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Transaction;