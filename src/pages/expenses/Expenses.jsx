import { useEffect, useState } from "react";
import API from "../../services/api";
import AddExpense from "./AddExpense";
import EditExpense from "./EditExpenses";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const res = await API.get(
        "/api/v1/expense-tracker/expenses/get-expense"
      );
      setExpenses(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      {/* Total Expense Card */}
      <div className="bg-surface rounded-2xl p-4 border border-border flex items-center justify-center gap-2">
        <h3 className="text-lg font-semibold text-white">Total Expense:</h3>
        <p className="text-3xl font-bold text-red-500">
          ${totalExpense.toLocaleString()}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT — Add Expense */}
        <div className="lg:col-span-1 max-w-xl">
          <AddExpense onAdded={fetchExpenses} />
        </div>

        {/* RIGHT — Expense List */}
        <div className="lg:col-span-2 space-y-4 h-auto max-h-[70vh] overflow-y-auto">
          {expenses.length === 0 ? (
            <p className="text-muted text-center mt-10">
              No expenses added yet
            </p>
          ) : (
            expenses.map((expense) => (
              <EditExpense
                key={expense._id}
                expense={expense}
                onChange={fetchExpenses}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;