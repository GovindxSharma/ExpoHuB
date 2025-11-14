import React from "react";
import { FiFileText } from "react-icons/fi";

const BrochureSection = () => {
  const brochures = [
    {
      id: 1,
      title: "FDF E-Brochure",
      desc: "Complete Freeze-Dried Fruits export catalogue with product specs, variants & shelf-life details.",
      file: "/brochures/fdf.pdf",
    },
    {
      id: 2,
      title: "NMCP E-Brochure",
      desc: "Nut Butters, Muesli, Cereals & Protein Bars portfolio with nutritional details & product lineup.",
      file: "/brochures/nmcp.pdf",
    },
  ];

  return (
    <section
      id="brochures"
      className="relative py-24 bg-[#F5E9DA] overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-[#C66A1F]/25 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5C3A00]/25 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-[Playfair_Display] font-extrabold text-[#3A3A3A]">
          Download Product Brochures
        </h2>

        <p className="text-[#3A3A3A]/70 mt-4 max-w-3xl mx-auto text-base sm:text-lg font-[Lato] leading-relaxed">
          Access detailed information on our premium Freeze-Dried Fruits,
          Nut Butters, Muesli, Cereals, and Protein Bars. Designed for
          exporters, retailers, and bulk buyers.
        </p>

        {/* Brochure Cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-12">
          {brochures.map((b) => (
            <div
              key={b.id}
              className="relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-[#C66A1F]/20 shadow-xl 
              hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Soft gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C66A1F]/10 to-[#5C3A00]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* 3D Floating Icon */}
              <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl 
              bg-gradient-to-br from-[#C66A1F] to-[#5C3A00] shadow-lg transform hover:scale-[1.15] transition-all duration-300">
                <FiFileText className="text-white text-4xl" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-[Playfair_Display] text-[#3A3A3A] font-semibold">
                {b.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-[#3A3A3A]/70 font-[Lato] leading-relaxed">
                {b.desc}
              </p>

              {/* Download Button */}
              <a
                href={b.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block w-full py-3 rounded-xl text-white font-semibold 
                bg-gradient-to-r from-[#C66A1F] to-[#5C3A00] shadow-md hover:opacity-90 transition-all text-sm"
              >
                View / Download PDF
              </a>

              {/* Floating Soft Glow BG Element */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#C66A1F]/25 blur-[80px] rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#C66A1F]/20 blur-[150px] opacity-50"></div>
    </section>
  );
};

export default BrochureSection;
