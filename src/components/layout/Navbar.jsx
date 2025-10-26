import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (link) => location.pathname === link.path;

  return (
    <nav className="sticky top-0 z-50 bg-[#f4dfc4] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center font-[Playfair_Display] hover:scale-105 transition-transform duration-300"
          >
          <img
          src="/logo.png"
          alt="Logo"
          className="w-56 h-28 sm:w-44 sm:h-24 md:w-48 md:h-28 lg:w-52 lg:h-32 object-contain"
        />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center font-[Lato] text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium text-[#3A3A3A] transition-all duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C66A1F] hover:after:w-full hover:text-[#C66A1F] ${
                  isActive(link)
                    ? "text-[#C66A1F] after:w-full"
                    : "after:transition-all after:duration-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-md text-[#5C3A00] hover:text-[#C66A1F] transition"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-[#F5E9DA] shadow-xl transform transition-transform duration-500 border-l-2 border-[#C66A1F]/20 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-[#C66A1F]/30 font-[Playfair_Display]">
            <span className="text-lg font-semibold text-[#5C3A00]">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#5C3A00] hover:text-[#C66A1F] transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-5 p-6 font-[Lato]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition ${
                  isActive(link)
                    ? "text-[#C66A1F]"
                    : "text-[#3A3A3A] hover:text-[#C66A1F]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
