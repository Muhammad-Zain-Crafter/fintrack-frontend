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
    <div className="min-h-screen bg-bg text-text px-6 md:px-10 py-20">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Powerful Features to Manage Your Money
        </h1>
        <p className="text-muted text-lg md:text-xl">
          FinTrack gives you everything you need to track expenses, manage income, and gain financial clarity — all in one secure, sleek platform.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col items-start hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-primary/20 to-income/10 border border-border rounded-3xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-muted text-lg mb-6">
          Create a free account and start tracking today.
        </p>
        <button className="px-8 py-3 bg-primary rounded-lg text-white text-lg md:text-xl hover:brightness-110 transition">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Features;