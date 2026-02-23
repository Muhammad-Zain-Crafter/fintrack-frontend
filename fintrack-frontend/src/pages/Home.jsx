import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg text-text">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 py-20">
        
        {/* Left */}
        <div>
          <h2 className="md:text-5xl text-3xl font-bold leading-tight">
            Track Expenses. <br />
            Control Money. <br />
            <span className="text-primary">Build Better Habits.</span>
          </h2>

          <p className="text-muted mt-6 max-w-xl">
            FinTrack helps you manage income, monitor expenses, and get
            monthly financial insights — all in one clean dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-primary rounded-lg text-white text-lg">
              Get Started
            </button>
            <button className="px-6 py-3 border border-border rounded-lg text-lg">
              View Demo
            </button>
          </div>
        </div>

        {/* Right – Preview Cards */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>

          <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">Monthly Summary</h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-bg p-4 rounded-lg">
                <p className="text-muted text-sm">Income</p>
                <p className="text-income text-xl font-bold">$16,500</p>
              </div>

              <div className="bg-bg p-4 rounded-lg">
                <p className="text-muted text-sm">Expenses</p>
                <p className="text-expense text-xl font-bold">$3,920</p>
              </div>

              <div className="bg-bg p-4 rounded-lg">
                <p className="text-muted text-sm">Balance</p>
                <p className="text-primary text-xl font-bold">$12,580</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Why FinTrack?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Expense Tracking",
              desc: "Add, edit and manage expenses effortlessly.",
            },
            {
              title: "Income Management",
              desc: "Track multiple income sources in one place.",
            },
            {
              title: "Monthly Insights",
              desc: "Visual summaries of your financial activity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
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
          <button className="mt-6 px-8 py-3 bg-primary rounded-lg text-white text-lg">
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