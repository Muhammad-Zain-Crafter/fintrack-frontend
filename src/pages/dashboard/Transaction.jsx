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
          ...(incomeRes.data.data || []).map((item) => ({
            ...item,
            type: "Income",
          })),
          ...(expenseRes.data.data || []).map((item) => ({
            ...item,
            type: "Expense",
          })),
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
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <div>
      <h1 className="text-2xl font-semibold m-4 text-white">
        All Transactions
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 mt-8">
        {["All", "Income", "Expense"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded font-medium text-white ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-surface hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6 ml-2 text-muted">
        {filteredTransactions.length === 0 ? (
          <p>No transactions to display.</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse max-w-[600px]">
              <thead>
                <tr className="bg-surface text-left text-white">
                  <th className="px-2 sm:px-4 py-2 whitespace-nowrap">Date</th>
                  <th className="px-2 sm:px-4 py-2 whitespace-nowrap">Type</th>
                  <th className="px-2 sm:px-4 py-2 whitespace-nowrap">
                    Amount
                  </th>
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
                    <td className="md:px-4 py-2 whitespace-nowrap">
                      {new Date(tx.date).toLocaleDateString()}
                    </td>

                    <td className="md:px-4 py-2 whitespace-nowrap">
                      {tx.type}
                    </td>

                    <td className="md:px-4 py-2 font-semibold whitespace-nowrap">
                      Rs {Number(tx.amount).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
