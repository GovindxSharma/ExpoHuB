import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-800 text-gray-200 pt-14 pb-8 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
        {/* ✅ Logo & tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src="/logo.png"
            alt="ExportHub Logo"
            className="w-32 h-auto sm:w-40 md:w-44 object-contain mb-4"
          />
          <p className="text-gray-400 leading-relaxed max-w-xs text-sm sm:text-base">
            Connecting global buyers and suppliers through trust, quality, and innovation.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Products", "About Us", "Contact", "Request Quotation"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li>📍 Ahmedabad, Gujarat, India</li>
            <li>📞 +91 97129 35176</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:info@exporthub.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@exporthub.com
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Social media + Certifications */}
        <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-2xl mb-6 justify-center sm:justify-start">
            {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Certifications</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4">
            {[
              {
                src: "https://hampsbio.com/wp-content/uploads/2023/11/fssai-logo-transparent-free-png-e1700827593527-300x130.webp",
                alt: "FSSAI Certified",
              },
              {
                src: "https://hampsbio.com/wp-content/uploads/2023/11/download-removebg-preview.png",
                alt: "FDA Approved",
              },
              {
                src: "https://hampsbio.com/wp-content/uploads/2023/11/png-transparent-iso-9000-international-organization-for-standardization-iso-14000-management-system-iso-9001-text-logo-business-removebg-preview-300x182.png",
                alt: "ISO Certified",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-[0_0_18px_rgba(99,102,241,0.5)] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex justify-center items-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider & copyright */}
      <div className="mt-10 pt-5 border-t border-gray-700 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">ExportHub</span>. All rights reserved.
      </div>

      {/* Floating glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-indigo-600/20 blur-[100px] opacity-30 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
