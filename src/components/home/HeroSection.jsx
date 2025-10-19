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
      img: "https://hips.hearstapps.com/hmg-prod/images/the-modern-concept-of-wellness-and-veganism-jars-of-royalty-free-image-1666018899.jpg",
      title: "Nut Butters: Pure, Creamy, and Wholesome",
      desc: "Harvested from nature and refined with precision to deliver freshness and quality in every jar..",
    },
    {
      id: 3,
      img: "https://cdn.gaiagoodhealth.com/wp-content/uploads/2024/10/07114327/Untitled-3-1.jpg",
      title: "Muesli & Cereals: Nutritious and Energizing",
      desc: "Blended from freshly sourced grains, nuts, and fruits to deliver wholesome nutrition and consistent quality in every pack.",
    },
  ];

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-14 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Premium Healthy Snack Catalogue
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg md:w-4/5 mx-auto md:mx-0">
            Partner with a brand that values trust and quality. Our snacks are made from carefully
            sourced ingredients, processed with precision, and packed using advanced food-grade
            technology to ensure freshness and long shelf life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleScroll("products")}
              className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300"
            >
              Browse Catalogue
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="border border-indigo-600 text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex-1 relative z-10">
          <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            <AnimatePresence>
              {slides.map(
                (slide, index) =>
                  index === current && (
                    <motion.img
                      key={slide.id}
                      src={slide.img}
                      alt={slide.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.8]"
                    />
                  )
              )}
            </AnimatePresence>

            {/* Text Overlay (stays visible, fades smoothly with slide) */}
            <div className="absolute bottom-5 left-5 right-5 text-white drop-shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[current].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold">{slides[current].title}</h2>
                  <p className="text-sm md:text-base opacity-90 mt-1">
                    {slides[current].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
