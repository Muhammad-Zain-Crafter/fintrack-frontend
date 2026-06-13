import { useEffect, useState } from "react";
import API from "../../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardChart = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);

  // Fetch expenses
  const fetchExpenses = async () => {
    try {
      const res = await API.get("/api/v1/expense-tracker/expenses/get-expense");
      setExpenses(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch incomes
  const fetchIncomes = async () => {
    try {
      const res = await API.get("/api/v1/expense-tracker/incomes/get-incomes");
      setIncomes(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Prepare chart data
  const prepareChartData = () => {
    // Combine all dates from income and expense
    const allDates = Array.from(
      new Set([...incomes.map((i) => i.date), ...expenses.map((e) => e.date)]),
    ).sort((a, b) => new Date(a) - new Date(b)); // sort by date

    const data = allDates.map((date) => {
      const incomeForDate = incomes
        .filter((i) => i.date === date)
        .reduce((sum, i) => sum + Number(i.amount), 0);

      const expenseForDate = expenses
        .filter((e) => e.date === date)
        .reduce((sum, e) => sum + Number(e.amount), 0);

      return {
        date,
        Income: incomeForDate,
        Expenses: expenseForDate,
      };
    });
    setChartData(data);
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([fetchExpenses(), fetchIncomes()]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  useEffect(() => {
    if (incomes.length || expenses.length) prepareChartData();
  }, [incomes, expenses]);

  if (loading) return <p>Loading chart...</p>;

  return (
 <div className="bg-surface p-4 sm:p-6 rounded-xl border border-border w-full h-[250px] sm:h-[295px]">
  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-white">
    All Transactions
  </h3>

  <ResponsiveContainer width="100%" height="88%">
    <LineChart
      data={chartData}
      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

      <XAxis
        dataKey="date"
        tickFormatter={(value) =>
          new Date(value).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })
        }
        tick={{ fill: "#ffffff", fontSize: 10 }}
        interval="preserveStartEnd"
      />

      <YAxis yAxisId="left" tick={{ fill: "#22c55e", fontSize: 10 }} />
      <YAxis
        yAxisId="right"
        orientation="right"
        tick={{ fill: "#ef4444", fontSize: 10 }}
      />

      <Tooltip />
      <Legend wrapperStyle={{ fontSize: "12px" }} />

      <Line
        yAxisId="left"
        type="monotone"
        dataKey="Income"
        stroke="#22c55e"
        strokeWidth={2}
        dot={{ r: 3 }}
      />

      <Line
        yAxisId="right"
        type="monotone"
        dataKey="Expenses"
        stroke="#ef4444"
        strokeWidth={2}
        dot={{ r: 3 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
  );
};

export default DashboardChart;
