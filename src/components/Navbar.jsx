import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Export Process", href: "/export-process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/20 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <a
            href="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Export<span className="text-gray-800">Hub</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-800 font-medium group transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-indigo-600 transition">
                  {link.name}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/get-quote"
              className="ml-4 relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 px-5 py-2 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:scale-105"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-white/10 blur-lg"></span>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-xl border-t border-white/20 shadow-lg animate-fadeIn">
          <div className="px-5 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-800 font-medium py-2 px-2 rounded-md hover:bg-gradient-to-r hover:from-indigo-100 hover:to-blue-50 hover:text-indigo-600 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/get-quote"
              className="block text-center bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold py-2 rounded-xl mt-2 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
