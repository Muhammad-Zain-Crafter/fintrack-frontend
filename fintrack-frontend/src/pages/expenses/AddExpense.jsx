import { useState } from "react";
import API from "../../services/api";

const AddExpense = ({ onAdded }) => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If category is empty, backend AI will auto-categorize
    await API.post(
      "/api/v1/expense-tracker/expenses/add-expense",
      {
        title: form.title,
        amount: form.amount,
        date: form.date,
        description: form.description,
        category: form.category || undefined,
      }
    );

    setForm({
      title: "",
      category: "",
      amount: "",
      date: "",
      description: "",
    });

    onAdded(); // callback function passed from the parent component to child
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-6 rounded-2xl border border-border space-y-4"
    >
      <h3 className="font-semibold text-lg text-white">
        Add Expense (AI Powered)
      </h3>

      {/* Title (Required for AI) */}
      <input
        required
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
        placeholder="Expense Title (e.g. Lunch at KFC)"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      {/* Optional Category */}
      <input
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
        placeholder="Category (leave empty for AI)"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        required
        type="number"
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        required
        type="date"
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-muted"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <textarea
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
        placeholder="Description (helps AI classify better)"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button className="w-1/2 bg-primary hover:opacity-90 text-white rounded-lg py-2 transition">
        + Add Expense
      </button>
    </form>
  );
};

export default AddExpense;