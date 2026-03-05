import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-primary">FinTrack</h2>
          <p className="text-muted mt-3 text-sm">
            Track your income, manage expenses, and build smarter financial
            habits with a clean and powerful dashboard.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Product</h4>
          <ul className="space-y-2 text-muted text-sm">
            <li>
              <Link to="/features" className="hover:text-white transition">
                Features
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="space-y-2 text-muted text-sm">
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Connect</h4>
          <div className="flex gap-4 text-muted">
            <a href="https://github.com/Muhammad-Zain-Crafter/fintrack-frontend" className="hover:text-primary transition">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} FinTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;