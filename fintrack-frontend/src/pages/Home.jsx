import React from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const summary = {
    income: 16500,
    expenses: 3920,
    balance: 12580,
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 py-16 items-center">
        {/* Hero Text */}
        <div>
          <h2 className="md:text-5xl text-3xl font-bold leading-tight">
            Track Expenses. <br />
            Control Money. <br />
            <span className="text-primary">Build Better Habits.</span>
          </h2>

          <p className="text-muted mt-6 max-w-xl">
            FinTrack helps you manage income, monitor expenses, and get monthly
            financial insights — all in one clean dashboard.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("login")}
              className="md:px-6 md:py-3 py-2 px-4 bg-primary rounded-lg text-white text-lg hover:backdrop-brightness-90 transition"
            >
              Get Started
            </button>
            <button onClick={() => navigate('/features')}
            className="md:px-6 md:py-3 py-2 px-4 border border-border rounded-lg text-lg hover:bg-surface transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>

          <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Monthly Summary</h3>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
              {/* Income */}
              <div className="bg-bg p-4 rounded-lg flex flex-col items-start">
                <p className="text-muted text-sm">Income</p>
                <p className="text-income text-xl font-bold">
                  $<CountUp end={summary.income} duration={3} separator="," />
                </p>
              </div>

              {/* Expenses */}
              <div className="bg-bg p-4 rounded-lg flex flex-col items-start">
                <p className="text-muted text-sm">Expenses</p>
                <p className="text-expense text-xl font-bold">
                  $<CountUp end={summary.expenses} duration={3} separator="," />
                </p>
              </div>

              {/* Balance */}
              <div className="bg-bg p-4 rounded-lg flex flex-col items-start">
                <p className="text-muted text-sm">Balance</p>
                <p className="text-primary text-xl font-bold">
                  $<CountUp end={summary.balance} duration={3} separator="," />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-semibold mb-4 text-center">
          Why FinTrack?
        </h3>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Not just tracking money — FinTrack helps you understand, plan, and
          control it intelligently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Budget Control */}
          <div className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-3">Budget Control</h4>
            <p className="text-muted mb-4">
              Set monthly budgets and stay on track with real-time progress.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Food</span>
                <span className="text-primary">₹4,200 / ₹6,000</span>
              </div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-primary rounded-full" />
              </div>
              <div className="flex justify-between text-sm">
                <span>Transport</span>
                <span className="text-primary">₹6,200 / ₹8,000</span>
              </div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* AI Categorizer */}
          <div className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-3">AI Categorizer</h4>
            <p className="text-muted mb-4">
              Expenses are automatically categorized using smart AI detection.
            </p>

            <div className="bg-background border border-border rounded-lg p-3 text-sm">
              <p className="text-muted">Description:</p>
              <p className="font-medium">“McDonald's order”</p>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  🍔 Food & Dining
                </span>
                <span className="text-xs text-muted">Auto-detected</span>
              </div>
            </div>
          </div>

          {/* Smart Insights */}
          <div className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold mb-3">Smart Insights</h4>
            <p className="text-muted mb-4">
              Understand where your money goes every month.
            </p>

            <div className="flex gap-2 items-end h-24">
              <div className="w-6 h-10 bg-primary/40 rounded" />
              <div className="w-6 h-16 bg-primary/60 rounded" />
              <div className="w-6 h-20 bg-primary rounded" />
              <div className="w-6 h-14 bg-primary/50 rounded" />
            </div>

            <p className="text-xs text-muted mt-3">
              Spending increased 18% this month
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-20">
        <div className="bg-gradient-to-r from-primary/20 to-income/10 border border-border rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold">
            Start Tracking Your Money Today
          </h3>
          <p className="text-muted mt-4">
            Take control of your finances with FinTrack.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="mt-6 px-8 py-3 bg-primary rounded-lg text-white text-lg"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-10 py-6 text-muted text-sm text-center">
        © 2026 FinTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
