import { useEffect, useState } from "react";
import API from "../../services/api";
import { User, Mail, Save } from "lucide-react";
import useProfile from "../hooks/useProfile";

const EditProfile = () => {
  const { user, loading } = useProfile();

  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username,
        fullname: user.fullname,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const res = await API.put(
        "/api/v1/expense-tracker/users/update-profile",
        form
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Update failed");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-xl bg-bg border border-border rounded-xl p-6">

        <h2 className="text-xl font-semibold text-white mb-6">
          Edit Profile
        </h2>

        {message && (
          <div className="mb-4 text-sm text-green-400">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-muted">Username</label>
            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <User size={18} className="text-white"/>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted">Full Name</label>
            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <User size={18} className="text-white"/>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted">Email</label>
            <div className="flex items-center border border-border rounded-lg px-3 mt-1">
              <Mail size={18} className="text-white"/>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent px-3 py-2 outline-none text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={updating}
            className="flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-lg w-full text-white"
          >
            <Save size={18} />
            {updating ? "Updating..." : "Update Profile"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;