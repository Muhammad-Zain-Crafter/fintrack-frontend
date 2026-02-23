import React from "react";

const features = [
  {
    title: "Expense Tracking",
    desc: "Add, update, and delete expenses securely. Understand where your money goes every month.",
    icon: "💸",
  },
  {
    title: "Income Management",
    desc: "Track multiple income sources and keep your earnings organized in one place.",
    icon: "💰",
  },
  {
    title: "Monthly Summary",
    desc: "Get a clear breakdown of income vs expenses with monthly insights.",
    icon: "📊",
  },
  {
    title: "AI Category Suggestions",
    desc: "FinTrack suggests expense categories based on the title or description to save time when adding expenses.",
    icon: "🧠",
  },
  {
    title: "Budget Management",
    desc: "Set monthly budgets for categories and track spending to avoid overspending.",
    icon: "🎯",
  },
  {
    title: "Secure Authentication",
    desc: "JWT-based authentication keeps your financial data private and protected.",
    icon: "🔐",
  },
  {
    title: "Data Privacy",
    desc: "Your financial data is isolated and accessible only by you.",
    icon: "🛡️",
  },
];

const Features = () => {
  return (
    <div className="px-6 md:px-10 py-16">
      
      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Powerful features to manage your money
        </h1>
        <p className="text-muted">
          FinTrack gives you everything you need to track expenses, manage income,
          and gain financial clarity — all in one secure platform.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-xl p-6 hover:-translate-y-1 transition"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-muted">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-gradient-to-r from-primary/20 to-income/10 border border-border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Ready to take control of your finances?
        </h2>
        <p className="text-muted mt-4">
          Create a free account and start tracking today.
        </p>
        <button className="mt-6 px-8 py-3 bg-primary rounded-lg text-white">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default Features;