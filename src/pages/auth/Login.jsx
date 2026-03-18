import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await API.post("api/v1/expense-tracker/users/login", {
        username: identifier,
        email: identifier,
        password,
      });

      localStorage.setItem("token", response.data.data.accessToken);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text px-4">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 px-3 py-1 bg-primary text-white rounded hover:brightness-90 transition text-sm"
      >
        Back to Home
      </button>
      <div className="w-full max-w-sm bg-surface border border-border rounded-xl p-6 shadow-lg relative">
        {/* Glow */}
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/20 blur-3xl rounded-full"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Welcome Back
        </h2>
        <p className="text-muted text-center mb-4 text-sm md:text-base">
          Login using your username or email
        </p>

        {error && (
          <div className="bg-expense/20 text-expense p-2 rounded mb-3 text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">
              Username or Email
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Enter username or email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-3 py-2 pr-10 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-primary text-white rounded-lg text-base font-semibold hover:brightness-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-muted mt-4 text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-primary font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
