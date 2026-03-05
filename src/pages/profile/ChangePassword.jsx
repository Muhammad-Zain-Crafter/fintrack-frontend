import { useState } from "react";
import API from "../../services/api";
import { Lock, KeyRound, Save } from "lucide-react";

const ChangePassword = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post(
        "/api/v1/expense-tracker/users/change-password",
        {
          oldPassword: form.oldPassword,
          newPassword: form.newPassword,
        }
      );

      setMessage(res.data.message);

      setForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-xl bg-bg border border-border rounded-xl p-6">

        <h2 className="text-xl font-semibold text-white mb-6">
          Change Password
        </h2>

        {message && (
          <div className="mb-4 text-green-400 text-sm">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Old Password */}
          <div>
            <label className="text-sm text-muted">Old Password</label>

            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <Lock size={18} className="text-white"/>
              <input
                type="password"
                name="oldPassword"
                value={form.oldPassword}
                onChange={handleChange}
                placeholder="Enter old password"
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm text-muted">New Password</label>

            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <KeyRound size={18} className="text-white"/>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-muted">Confirm New Password</label>

            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <KeyRound size={18} className="text-white"/>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-lg w-full text-white hover:opacity-90"
          >
            <Save size={18} />
            {loading ? "Updating..." : "Change Password"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ChangePassword;