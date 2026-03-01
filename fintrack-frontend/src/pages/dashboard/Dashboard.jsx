import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ProfileHeader from "../profile/ProfileHeader";
import {
  LayoutDashboard,
  TrendingUp ,
  CreditCard,
  Wallet,
} from "lucide-react";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex p-6 gap-6 bg-bg">
      {/* Sidebar */}
      <aside className="w-64 bg-surface rounded-2xl p-6 flex flex-col justify-between border border-border">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <ProfileHeader />
          </div>

          <nav className="space-y-3 text-sm">
  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      `flex items-center gap-3 ${
        isActive
          ? "text-white font-medium"
          : "text-muted hover:text-white"
      }`
    }
  >
    <LayoutDashboard size={18} />
    Dashboard
  </NavLink>

  <NavLink
    to="/income"
    className={({ isActive }) =>
      `flex items-center gap-3 ${
        isActive
          ? "text-white font-medium"
          : "text-muted hover:text-white"
      }`
    }
  >
    <TrendingUp  size={18} />
    Income
  </NavLink>

  <NavLink
    to="/transactions"
    className={({ isActive }) =>
      `flex items-center gap-3 ${
        isActive
          ? "text-white font-medium"
          : "text-muted hover:text-white"
      }`
    }
  >
    <CreditCard size={18} />
    Transactions
  </NavLink>

  <NavLink
    to="/expenses"
    className={({ isActive }) =>
      `flex items-center gap-3 ${
        isActive
          ? "text-white font-medium"
          : "text-muted hover:text-white"
      }`
    }
  >
    <Wallet size={18} />
    Expenses
  </NavLink>
</nav>
        </div>

        <button className="text-red-500" onClick={handleLogout}>
          Sign Out
        </button>
      </aside>

      {/* Main Dynamic Content */}
      <main className="flex-1 space-y-6">{children}</main>
    </div>
  );
};

export default Dashboard;
