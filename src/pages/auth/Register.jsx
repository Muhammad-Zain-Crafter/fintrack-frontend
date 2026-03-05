import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !fullname || !email || !password) {
      setError("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid Gmail address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await API.post("api/v1/expense-tracker/users/register", {
        username,
        fullname,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Username or email may already exist"
      );
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
          Create Account
        </h2>
        <p className="text-muted text-center mb-4 text-sm md:text-base">
          Fill in your details to register
        </p>

        {error && (
          <div className="bg-expense/20 text-expense p-2 rounded mb-3 text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="Enter Gmail address"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              placeholder="At least 6 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-primary text-white rounded-lg text-base font-semibold hover:brightness-90 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-muted mt-4 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-primary font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;