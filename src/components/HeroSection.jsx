import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-300 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Global Product Catalogue
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg md:w-4/5">
            Explore a world of export-ready products — crafted with excellence,
            quality, and global standards. From **agro commodities** to
            **industrial machinery**, find everything your business needs to
            trade smarter.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/catalogue"
              className="inline-block bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300"
            >
              Browse Catalogue
            </a>
            <a
              href="/contact"
              className="inline-block border border-indigo-600 text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative z-10">
          <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
          <img
          src="https://augasonfarms.com/cdn/shop/articles/freeze-dried-fruits-nutritious-tasty-and-easy-to-take-anywhere-395723_1296x.jpg?v=1744390505"
          alt="Product Catalogue"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105 transition-transform duration-[3000ms] ease-out"
        />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          <div className="absolute -bottom-5 -left-5 w-36 h-36 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
