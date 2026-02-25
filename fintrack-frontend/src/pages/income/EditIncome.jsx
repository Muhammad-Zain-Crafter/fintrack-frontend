import { useState } from "react";
import API from "../../services/api";
import { Trash2, Pencil, Check, X } from "lucide-react";

const EditIncome = ({ income, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    source: income.source,
    amount: income.amount,
    date: income.date?.split("T")[0], // format for input type="date"
  });

  // UPDATE
  const handleUpdate = async () => {
    try {
      await API.put(
        `/api/v1/expense-tracker/incomes/update-income/${income._id}`,
        form
      );
      setIsEditing(false);
      onChange();
    } catch (err) {
      console.error("Update income failed", err);
    }
  };

  // DELETE
  const handleDelete = async () => {
    try {
      await API.delete(
        `/api/v1/expense-tracker/incomes/delete-income/${income._id}`
      );
      onChange();
    } catch (err) {
      console.error("Delete income failed", err);
    }
  };

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 flex justify-between items-center hover:shadow-md transition-all duration-200">

      {isEditing ? (
        <div className="w-full space-y-3">

          <input
            className="w-full bg-bg border border-border rounded-lg p-3 text-sm"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <div className="flex gap-3">
            <input
              type="number"
              className="flex-1 bg-bg border border-border rounded-lg p-3 text-sm"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <input
              type="date"
              className="flex-1 bg-bg border border-border rounded-lg p-3 text-sm"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={handleUpdate}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <Check size={16} />
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Left Section */}
          <div>
            <h4 className="font-semibold text-base">
              {income.title}
            </h4>

            <div className="flex gap-4 text-sm text-muted mt-1">
              <span>
                📅 {new Date(income.date).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <span className="text-green-500 font-semibold text-lg">
              ₨ {Number(income.amount).toLocaleString()}
            </span>

            <Pencil
              size={18}
              className="cursor-pointer text-muted hover:text-blue-500 transition"
              onClick={() => setIsEditing(true)}
            />

            <Trash2
              size={18}
              className="cursor-pointer text-muted hover:text-red-500 transition"
              onClick={handleDelete}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EditIncome;