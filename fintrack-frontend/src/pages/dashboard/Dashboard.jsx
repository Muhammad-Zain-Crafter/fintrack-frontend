import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ProfileHeader from "../profile/ProfileHeader";

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
      isActive
        ? "block text-white font-medium"
        : "block text-muted hover:text-white"
    }
  >
    Dashboard
  </NavLink>

  <NavLink
    to="/income"
    className={({ isActive }) =>
      isActive
        ? "block text-white font-medium"
        : "block text-muted hover:text-white"
    }
  >
    Income
  </NavLink>

  <NavLink
    to="/transactions"
    className={({ isActive }) =>
      isActive
        ? "block text-white font-medium"
        : "block text-muted hover:text-white"
    }
  >
    Transactions
  </NavLink>

  <NavLink
    to="/expenses"
    className={({ isActive }) =>
      isActive
        ? "block text-white font-medium"
        : "block text-muted hover:text-white"
    }
  >
    Expenses
  </NavLink>

</nav>
        </div>

        <button className="text-red-500"
        onClick={handleLogout}>Sign Out</button>
      </aside>

      {/* Main Dynamic Content */}
      <main className="flex-1 space-y-6">{children}</main>

      {/* Right Panel */}
      <aside className="w-80 bg-surface rounded-2xl p-6 border border-border">
        <h4 className="font-semibold mb-4">Recent History</h4>
      </aside>
    </div>
  );
};

export default Dashboard;
