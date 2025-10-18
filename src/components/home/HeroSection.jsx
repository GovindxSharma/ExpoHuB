import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      id: 1,
      img: "https://augasonfarms.com/cdn/shop/articles/freeze-dried-fruits-nutritious-tasty-and-easy-to-take-anywhere-395723_1296x.jpg?v=1744390505",
      title: "Explore Premium Freeze-Dried Delights",
      desc: "Sourced from nature, perfected for export — freshness you can taste.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=1470&auto=format&fit=crop",
      title: "Global Exports, Local Excellence",
      desc: "Delivering quality products trusted by clients across continents.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1470&auto=format&fit=crop",
      title: "Your Reliable Export Partner",
      desc: "Efficiency, quality, and trust — built into every shipment.",
    },
  ];
  

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-300 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-[130px] opacity-40 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Global Product Catalogue
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg md:w-4/5 mx-auto md:mx-0">
            Explore a world of export-ready products crafted with excellence and
            quality. From agro commodities to industrial goods — find everything
            your business needs to trade smarter.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleScroll("products")}
              className="inline-block bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300"
            >
              Browse Catalogue
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="inline-block border border-indigo-600 text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="flex-1 w-full relative z-10 group">
          <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].id}
                src={slides[current].img}
                alt={slides[current].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.75]"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold drop-shadow-md">
                {slides[current].title}
              </h2>
              <p className="text-sm md:text-base opacity-90 mt-1">
                {slides[current].desc}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-400 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Accent Glow */}
          <div className="absolute -bottom-5 -left-5 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
