import React from "react";
import ProfileHeader from "../profile/ProfileHeader";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex p-6 gap-6">

      {/* Sidebar */}
      <aside className="w-64 bg-surface rounded-2xl p-6 flex flex-col justify-between border border-border">
        <div>
          {/* Profile */}
          <div className="flex items-center gap-3 mb-10">
          <ProfileHeader/>
          </div>

          {/* Nav */}
          <nav className="space-y-3 text-sm">
            <p className="text-primary font-medium">Dashboard</p>
            <p className="text-muted hover:text-foreground cursor-pointer">Transactions</p>
            <p className="text-muted hover:text-foreground cursor-pointer">Income</p>
            <p className="text-muted hover:text-foreground cursor-pointer">Expenses</p>
          </nav>
        </div>

        <button className="text-sm text-muted hover:text-red-500">
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-6">

        {/* Chart placeholder */}
        <div className="bg-surface rounded-2xl p-6 border border-border">
          <h3 className="font-semibold mb-4">All Transactions</h3>
          <div className="h-48 flex items-center justify-center text-muted">
            📊 Chart goes here
          </div>
        </div>

        {/* Summary cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard title="Total Income" amount="$16,500" />
          <SummaryCard title="Total Expenses" amount="$3,920" />
          <SummaryCard title="Total Balance" amount="$12,580" highlight />
        </div> */}

      </main>

      {/* Right Panel */}
      <aside className="w-80 bg-surface rounded-2xl p-6 border border-border">
        <h4 className="font-semibold mb-4">Recent History</h4>

        {/* <div className="space-y-3 text-sm">
          <HistoryItem label="Dentist Appointment" amount="- $120" />
          <HistoryItem label="Travelling" amount="- $3000" />
          <HistoryItem label="From Freelance" amount="+ $1300" positive />
        </div> */}
      </aside>

    </div>
  );
};

export default Dashboard;