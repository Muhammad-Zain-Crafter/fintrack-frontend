import { useState } from "react";
import API from "../../services/api";

const AddIncome = ({ onAdded }) => {
  const [form, setForm] = useState({
    source: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/api/v1/expense-tracker/incomes/add-income", form);
    setForm({ source: "", amount: "", date: "", description: "" });
    onAdded();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-6 rounded-2xl border border-border space-y-4"
    >
      <h3 className="font-semibold text-lg text-white">Add Income</h3>

      <input
        required
        className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
        placeholder="Income Source"
        value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value })}
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
        placeholder="Add a description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <button className="w-1/2 bg-primary hover:opacity-90 text-white rounded-lg py-2 transition">
        + Add Income
      </button>
    </form>
  );
};

export default AddIncome;
