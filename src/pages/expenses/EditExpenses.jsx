import { useState } from "react";
import API from "../../services/api";
import { Trash2, Pencil, Check, X, Calendar, Tag } from "lucide-react";

const EditExpenses = ({ expense, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    title: expense.title,
    category: expense.category || "",
    amount: expense.amount,
    date: expense.date?.split("T")[0],
    description: expense.description || "",
  });

  // UPDATE
  const handleUpdate = async () => {
    try {
      await API.put(
        `/api/v1/expense-tracker/expenses/update-expense/${expense._id}`,
        form
      );
      setIsEditing(false);
      onChange();
    } catch (err) {
      console.error("Update expense failed", err);
    }
  };

  // DELETE
  const handleDelete = async () => {
    try {
      await API.delete(
        `/api/v1/expense-tracker/expenses/delete-expense/${expense._id}`
      );
      onChange();
    } catch (err) {
      console.error("Delete expense failed", err);
    }
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 flex justify-between items-center hover:shadow-md transition-all">
      {isEditing ? (
        /* EDIT MODE */
        <div className="w-full space-y-3">
          <input
            className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
            placeholder="Expense Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
            placeholder="Category (leave empty for AI)"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <textarea
            className="w-full bg-bg border border-border rounded-lg p-3 text-sm text-white"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <div className="flex gap-3">
            <input
              type="number"
              className="flex-1 bg-bg border border-border rounded-lg p-3 text-sm text-white"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <input
              type="date"
              className="flex-1 bg-bg border border-border rounded-lg p-3 text-sm text-white"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={handleUpdate}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
            >
              <Check size={16} />
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg text-sm"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        /* VIEW MODE */
        <>
          {/* LEFT */}
          <div>
            <h4 className="font-semibold text-white">
              {expense.title}
            </h4>

            <div className="flex flex-row gap-6 mt-1">
              {expense.description && (
                <p className="text-sm text-muted">
                  {expense.description}
                </p>
              )}

              <div className="flex items-center gap-1 text-xs text-muted">
                <Calendar size={14} className="opacity-70" />
                <span>
                  {new Date(expense.date).toLocaleDateString()}
                </span>
              </div>

              {expense.category && (
                <div className="flex items-center gap-1 text-xs text-muted">
                  <Tag size={14} className="opacity-70" />
                  <span>{expense.category}</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <span className="text-red-500 font-semibold text-lg">
              -${Number(expense.amount).toLocaleString()}
            </span>

            <Pencil
              size={18}
              className="cursor-pointer text-muted hover:text-blue-500"
              onClick={() => setIsEditing(true)}
            />

            <Trash2
              size={18}
              className="cursor-pointer text-muted hover:text-red-500"
              onClick={handleDelete}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EditExpenses;