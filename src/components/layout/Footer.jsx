import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const certifications = [
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
  ];

  return (
    <footer className="relative bg-[#efd0b0] text-[#3A3A3A] pt-14 pb-8 overflow-hidden">
      {/* Warm Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C66A1F]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#5C3A00]/20 blur-3xl rounded-full"></div>

      {/* Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 items-start">
        
        {/* Logo & tagline */}
        <div className="flex flex-col items-start justify-start text-left h-full">
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
        <div className="flex flex-col items-start justify-start text-left h-full">
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "Products", "About Us", "Contact", "Request Quotation"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[#3A3A3A]/80 hover:text-[#C66A1F] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start justify-start text-left h-full">
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">
            Get In Touch
          </h3>
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

        {/* Social Media + Certifications */}
        <div className="flex flex-col items-start justify-start text-left h-full">
          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">
            Follow Us
          </h3>
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
            <a href="#" className="hover:text-[#C66A1F] transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#C66A1F] transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>

          <h3 className="text-lg font-semibold text-[#5C3A00] mb-3">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF]/90 backdrop-blur-sm rounded-xl shadow-md p-2 flex items-center justify-center max-w-[120px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(198,106,31,0.5)]"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Credit */}
      <div className="mt-10 pt-5 border-t border-[#3A3A3A]/20 text-center text-[#3A3A3A]/70 text-xs sm:text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#5C3A00] font-medium">SK Foodz</span>. All rights reserved.
        <br />
        <span className="text-[#3A3A3A]/60 text-[11px] sm:text-xs mt-1 block">
          Designed & Developed by{" "}
          <a
            href="https://govind-sharma.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C66A1F] hover:underline"
          >
            Govind Sharma
          </a>
        </span>
      </div>

      {/* Floating glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#C66A1F]/20 blur-[100px] opacity-30 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
