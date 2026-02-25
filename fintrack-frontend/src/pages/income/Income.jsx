import { useEffect, useState } from "react";
import API from "../../services/api";
import EditIncome from "./EditIncome";
import AddIncome from "./AddIncome";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIncomes = async () => {
    try {
      const res = await API.get(
        "/api/v1/expense-tracker/incomes/get-incomes"
      );
      setIncomes(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  const totalIncome = incomes.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">

      {/* Title */}
      <h2 className="text-2xl font-semibold">Incomes</h2>

      {/* Total Income Bar */}
      <div className="bg-surface rounded-2xl p-6 border border-border flex justify-between items-center">
        <h3 className="text-lg font-medium">Total Income:</h3>
        <p className="text-2xl font-bold text-green-500">
          ₨ {totalIncome.toLocaleString()}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE — Add Income */}
        <div className="lg:col-span-1">
          <AddIncome onAdded={fetchIncomes} />
        </div>

        {/* RIGHT SIDE — Income List */}
        <div className="lg:col-span-2 space-y-4">
          {incomes.map((income) => (
            <EditIncome
              key={income._id}
              income={income}
              onChange={fetchIncomes}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Income;