import { useEffect, useState } from "react";
import API from "../../services/api";
import DashboardChart from "./DashboardChart";

const DashboardHome = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchMonthlySummary = async () => {
    try {
      const res = await API.get(
        `/api/v1/expense-tracker/dashboard/monthly-summary?month=${month}&year=${year}`
      );
      setSummary(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonthlySummary();
  }, [month, year]);

  if (loading) return <p className="text-muted">Loading...</p>;

  const totalIncome = summary?.income ?? 0;
const totalExpense = summary?.expense ?? 0;
const balance = totalIncome - totalExpense;

  return (
    <div className="space-y-6">
      {/* Month / Year Selector (optional but recommended) */}
      <div className="flex gap-4">
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="bg-bg border border-border rounded-lg px-3 py-2 text-white"
        >
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              Month {i + 1}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="bg-bg border border-border rounded-lg px-3 py-2 text-white w-28"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div className="bg-surface p-5 rounded-xl border border-border">
          <p className="text-sm text-muted">Total Income</p>
          <h2 className="text-2xl font-bold text-green-500">
            ${totalIncome.toLocaleString()}
          </h2>
        </div>

        <div className="bg-surface p-5 rounded-xl border border-border">
          <p className="text-sm text-muted">Total Expenses</p>
          <h2 className="text-2xl font-bold text-red-500">
            ${totalExpense.toLocaleString()}
          </h2>
        </div>

        <div className="bg-surface p-5 rounded-xl border border-border">
          <p className="text-sm text-muted">Balance</p>
          <h2 className="text-2xl font-bold text-primary">
            ${balance.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-surface rounded-xl border border-border p-4">
        <DashboardChart data={summary.categoryBreakdown} />
      </div>
    </div>
  );
};

export default DashboardHome;