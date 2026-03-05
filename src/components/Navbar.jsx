import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-medium"
      : "text-muted hover:text-text transition";

  return (
    <nav className="border-b border-border bg-bg">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <div
          className="text-2xl font-semibold text-primary cursor-pointer"
          onClick={() => navigate("/")}
        >
          FinTrack
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/features" className={navLinkClass}>
            Features
          </NavLink>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-border hover:bg-surface text-white"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-lg bg-primary text-white"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-4 bg-bg">
          <div className="flex flex-col gap-4">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/features"
              className={navLinkClass}
            >
              Features
            </NavLink>
          </div>
          <button
            onClick={() => {
              setOpen(false);
              navigate("/login");
            }}
            className="block w-full px-4 py-2 border border-border rounded-lg"
          >
            Login
          </button>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/register");
            }}
            className="block w-full px-4 py-2 bg-primary text-white rounded-lg"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
