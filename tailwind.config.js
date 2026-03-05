/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        surface: "#121826",
        border: "#1F2937",
        primary: "#3B82F6",
        income: "#22C55E",
        expense: "#EF4444",
        text: "#E5E7EB",
        muted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};