import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ProfileHeader from "../profile/ProfileHeader";
import {
  LayoutDashboard,
  TrendingUp,
  CreditCard,
  Wallet,
  Target,
  KeyRound,
  User,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex md:p-6 gap-6 bg-bg">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-surface rounded-2xl p-6 flex-col justify-between border border-border">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <ProfileHeader />
          </div>

          <nav className="space-y-3 text-sm">

            <NavLink
              to="/dashboard"
              end
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
              to="/dashboard/income"
              className={({ isActive }) =>
                `flex items-center gap-3 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-muted hover:text-white"
                }`
              }
            >
              <TrendingUp size={18} />
              Income
            </NavLink>

            <NavLink
              to="/dashboard/transactions"
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
              to="/dashboard/expenses"
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

            <NavLink
              to="/dashboard/budgets"
              className={({ isActive }) =>
                `flex items-center gap-3 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-muted hover:text-white"
                }`
              }
            >
              <Target size={18} />
              Budgets
            </NavLink>

            <NavLink
              to="/dashboard/edit-profile"
              className={({ isActive }) =>
                `flex items-center gap-3 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-muted hover:text-white"
                }`
              }
            >
              <User size={18} />
              Edit Profile
            </NavLink>

            <NavLink
              to="/dashboard/change-password"
              className={({ isActive }) =>
                `flex items-center gap-3 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-muted hover:text-white"
                }`
              }
            >
              <KeyRound size={18} />
              Change Password
            </NavLink>

          </nav>
        </div>

        <button
          className="text-red-500 hover:text-red-400"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-6 pb-20 md:pb-0 p-4 md:p-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-surface border-t border-border flex justify-around py-2.5">

        <NavLink
          to="/dashboard"
          end
          className="flex flex-col items-center text-xs text-muted"
        >
          <LayoutDashboard size={20} />
          Home
        </NavLink>

        <NavLink
          to="/dashboard/income"
          className="flex flex-col items-center text-xs text-muted"
        >
          <TrendingUp size={20} />
          Income
        </NavLink>

        <NavLink
          to="/dashboard/expenses"
          className="flex flex-col items-center text-xs text-muted"
        >
          <Wallet size={20} />
          Expenses
        </NavLink>

        <NavLink
          to="/dashboard/transactions"
          className="flex flex-col items-center text-xs text-muted"
        >
          <CreditCard size={20} />
          History
        </NavLink>

        <NavLink
          to="/dashboard/budgets"
          className="flex flex-col items-center text-xs text-muted"
        >
          <Target size={20} />
          Budgets
        </NavLink>

      </div>
    </div>
  );
};

export default Dashboard;