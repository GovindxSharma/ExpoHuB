import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import apeda from "../../assets/certificates/apeda.png";
import dgft from "../../assets/certificates/dgft.png";
import fda from "../../assets/certificates/fda.png";
import fssai from "../../assets/certificates/fssai.png";
import iso from "../../assets/certificates/iso.png";
import msme from "../../assets/certificates/msme.png";
import zed from "../../assets/certificates/zed.png";

const Footer = () => {
  const certifications = [
    { src: apeda, alt: "APEDA Certified" },
    { src: dgft, alt: "DGFT Certified" },
    { src: fda, alt: "FDA Approved" },
    { src: fssai, alt: "FSSAI Certified" },
    { src: iso, alt: "ISO Certified" },
    { src: msme, alt: "MSME Certified" },
    { src: zed, alt: "ZED Certified" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#efd0b0] text-[#3A3A3A] pt-14 pb-8 overflow-hidden">

      {/* Warm Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C66A1F]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5C3A00]/20 blur-3xl rounded-full"></div>

      {/* Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">

        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/logo.png"
            alt="SK Foodz Logo"
            className="w-32 sm:w-40 md:w-44 object-contain mb-4"
          />
          <p className="text-[#3A3A3A]/80 leading-relaxed max-w-xs text-sm sm:text-base">
            Delivering authentic, healthy, and export-quality food products with
            a commitment to freshness and purity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-[#3A3A3A]/80 hover:text-[#C66A1F] transition-colors duration-200 text-sm sm:text-base block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-[#3A3A3A]/80 text-sm sm:text-base">
            <li>📞 +91 81040 27533</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:business@skfoodz.in"
                className="hover:text-[#C66A1F] transition-colors duration-200"
              >
                business@skfoodz.in
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">Follow Us</h3>

          <div className="flex space-x-4 text-[#3A3A3A]/80 text-2xl mb-6">
            <a href="#" className="hover:text-[#C66A1F] transition-colors duration-300">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sk_foodz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C66A1F] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">Certifications</h3>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative group flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {/* Tooltip — mobile safe */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#5C3A00] text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-20">
                  {cert.alt}
                </div>

                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

 {/* Divider */}
<div className="relative z-50 mt-10 pt-5 border-t border-[#3A3A3A]/20 text-center px-6">
<p className="text-[#3A3A3A]/70 text-xs sm:text-sm leading-relaxed">
  © {new Date().getFullYear()}{" "}
  <span className="text-[#5C3A00] font-medium">SK Foodz</span>. All rights reserved.
</p>

<p className="text-[#3A3A3A]/60 text-[11px] sm:text-xs mt-2 leading-relaxed">
  Designed & Developed by{" "}
  <a
    href="https://govind-sharma.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#C66A1F] underline-offset-2 hover:underline font-medium"
  >
    Govind Sharma
  </a>
</p>
</div>


      {/* Soft Bottom Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#C66A1F]/20 blur-[100px] opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;
