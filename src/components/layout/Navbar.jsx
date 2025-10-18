// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(targetId);
    if (!target) return;
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Export<span className="text-gray-800">Hub</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.path ? (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-gray-800 font-medium group transition-all duration-300 ${
                    location.pathname === link.path ? "text-indigo-600" : ""
                  }`}
                >
                  <span className="relative z-10 group-hover:text-indigo-600 transition">
                    {link.name}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative text-gray-800 font-medium group transition-all duration-300"
                >
                  {link.name}
                </a>
              )
            )}

            <a
              href="#get-quote"
              onClick={(e) => handleSmoothScroll(e, "#get-quote")}
              className="ml-4 relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 px-5 py-2 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:scale-105"
            >
              <span className="relative z-10">Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
