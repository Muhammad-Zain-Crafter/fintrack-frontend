import { useEffect, useState } from "react";
import API from "../../services/api";
import { Trash2 } from "lucide-react";
const Budgets = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    category: "",
    limit: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  // 🔹 Fetch Budgets
  const fetchBudgets = async () => {
    try {
      const res = await API.get("/api/v1/expense-tracker/budgets/get-budgets");
      setBudgets(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  // 🔹 Add Budget
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/v1/expense-tracker/budgets/add-budget", {
        ...form,
        limit: Number(form.limit),
      });

      setForm({
        category: "",
        limit: "",
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      });

      fetchBudgets();
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Delete Budget
  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/v1/expense-tracker/budgets/delete-budget/${id}`);
      fetchBudgets();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-background text-foreground p-3">
      <h1 className="text-2xl font-semibold mb-6 text-white">Budgets</h1>

      {/* ➕ Add Budget */}
      <div className="bg-surface border border-border rounded-xl p-4 mb-8">
        <h2 className="text-lg font-medium mb-2 text-white">Add Budget</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            placeholder="Category"
            className="bg-bg border border-border rounded-lg px-4 py-1.5 text-white"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Limit"
            className="bg-bg border border-border rounded-lg px-4 py-1.5 text-white"
            value={form.limit}
            onChange={(e) => setForm({ ...form, limit: e.target.value })}
            required
          />

          <select
            className="bg-bg border border-border rounded-lg px-4 py-1.5 text-white"
            value={form.month}
            onChange={(e) =>
              setForm({ ...form, month: Number(e.target.value) })
            }
          >
            <option value="" disabled>
              Choose Month
            </option>

            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>
                Month {i + 1}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Year"
            className="bg-bg border border-border rounded-lg px-4 py-1.5 text-white"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
          />

          <button
            type="submit"
            className="md:col-span-4 bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-medium"
          >
            Add Budget
          </button>
        </form>
      </div>

      {/* Budget List */}
      <div className="bg-surface border border-border rounded-xl p-4 h-auto max-h-[42vh] overflow-y-auto">
        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : budgets.length === 0 ? (
          <p className="text-muted">No budgets added yet.</p>
        ) : (
          <div className="space-y-3">
            {budgets.map((budget) => (
              <div
                key={budget._id}
                className="flex items-center justify-between bg-background border border-border rounded-lg px-4 py-2"
              >
                <div>
                  <p className="font-medium text-white">{budget.category}</p>
                  <p className="text-sm text-muted">
                    Month {budget.month} • {budget.year}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold text-green-500">
                    ${budget.limit}
                  </p>
                  <Trash2
                    size={18}
                    className="cursor-pointer text-muted hover:text-red-500"
                    onClick={() => handleDelete(budget._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Budgets;
