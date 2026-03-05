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
      <div className="bg-surface rounded-2xl p-4 border border-border flex items-center
       justify-center gap-2">
        <h3 className="text-lg font-semibold text-white">Total Income:</h3>
        <p className="text-3xl font-bold text-green-500">
        ${totalIncome.toLocaleString()}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE — Add Income */}
        <div className="lg:col-span-1 max-w-xl">
          <AddIncome onAdded={fetchIncomes} />
        </div>

        {/* RIGHT SIDE — Income List */}
        <div className="lg:col-span-2 space-y-4 h-auto max-h-[70vh] overflow-y-auto">
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