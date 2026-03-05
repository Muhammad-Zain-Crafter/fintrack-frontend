import { useState } from "react";
import API from "../../services/api";
import { AlertCircle } from "lucide-react";

const AddExpense = ({ onAdded }) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await API.post("/api/v1/expense-tracker/expenses/add-expense", {
        title: form.title,
        amount: Number(form.amount),
        date: form.date,
        description: form.description,
        category: form.category === "auto" ? undefined : form.category,
      });

      setForm({
        title: "",
        category: "",
        amount: "",
        date: "",
        description: "",
      });

      onAdded(); // refresh expense list
    } catch (err) {
      if (err.response?.status === 400) {
        setError(err.response.data.message || "Budget limit exceeded");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-5 rounded-2xl border border-border space-y-3"
    >
      <h3 className="font-semibold text-lg text-white">Add Expense</h3>

      {/* 🚨 Budget Error */}
      {error && (
       
    <div className="bg-red-500/10 border flex flex-row gap-2 items-center border-red-500 text-red-400 rounded-lg p-3 text-sm">
          <AlertCircle size={18}/>
          <span>{error}</span>
        </div>
      )}

      <input
        required
        className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm text-white"
        placeholder="Expense Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        required
        type="number"
        className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm text-white"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        required
        type="date"
        className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm text-muted"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <select
        className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm text-white"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="auto">Auto</option>
        <option value="Food">Food</option>
        <option value="Transport">Transportation</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        className="w-full bg-bg border border-border rounded-lg p-2.5 text-sm text-white"
        placeholder="Add a description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button
        disabled={loading}
        className="w-1/2 bg-primary hover:opacity-90 disabled:opacity-50 text-white rounded-lg py-2.5 transition"
      >
        {loading ? "Adding..." : "+ Add Expense"}
      </button>
    </form>
  );
};

export default AddExpense;