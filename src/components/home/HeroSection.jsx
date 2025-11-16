import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const [current, setCurrent] = useState(0);


const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      img: "https://augasonfarms.com/cdn/shop/articles/freeze-dried-fruits-nutritious-tasty-and-easy-to-take-anywhere-395723_1296x.jpg?v=1744390505",
      title: "Freeze-Dried Fruits: Nature's Goodness, Sealed Fresh",
      desc: "Sourced from nature, perfected for export — freshness you can taste.",
    },
    {
      id: 2,
      img: "https://hips.hearstapps.com/hmg-prod/images/the-modern-concept-of-wellness-and-veganism-jars-of-royalty-free-image-1666018899.jpg",
      title: "Nut Butters: Pure, Creamy, and Wholesome",
      desc: "Harvested from nature and refined with precision to deliver freshness and quality in every jar.",
    },
    {
      id: 3,
      img: "https://cdn.gaiagoodhealth.com/wp-content/uploads/2024/10/07114327/Untitled-3-1.jpg",
      title: "Muesli & Cereals: Nutritious and Energizing",
      desc: "Blended from freshly sourced grains, nuts, and fruits to deliver wholesome nutrition and consistent quality in every pack.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F5E9DA]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-[Playfair_Display] font-extrabold text-[#3A3A3A] leading-tight">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-[#5C3A00] via-[#C66A1F] to-[#5C3A00] bg-clip-text text-transparent">
              Premium Healthy Snack Catalogue
            </span>
          </h1>

          <p className="mt-4 text-[#3A3A3A]/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-[Lato]">
            Partner with a brand that values trust and quality. Our snacks are made from carefully
            sourced ingredients, processed with precision, and packed using advanced food-grade
            technology to ensure freshness and long shelf life.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleScroll("products")}
              className="bg-gradient-to-r from-[#C66A1F] to-[#5C3A00] text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-sm sm:text-base shadow-md"
            >
              Browse Catalogue
            </button>
            <button
  onClick={() => navigate("/contact")}
  className="border border-[#C66A1F] text-[#5C3A00] font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl hover:bg-[#C66A1F]/10 transition-all duration-300 text-sm sm:text-base"
>
  Get in Touch
</button>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex-1 relative z-10 w-full">
        <div className="relative w-full h-[480px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-[#F5E9DA] flex flex-col">
          
          {/* Upper Half: Image */}
          <div className="relative h-3/5 w-full rounded-t-2xl overflow-hidden">
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
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
                    />
                  )
              )}
            </AnimatePresence>
          </div>
      
          {/* Lower Half: Text */}
          <div className="h-2/5 w-full bg-[#5C3A00]/5 flex items-center justify-center p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-center md:text-left"
              >
                <h2 className="text-lg sm:text-2xl md:text-3xl font-[Playfair_Display] font-bold text-[#3A3A3A]">
                  {slides[current].title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#3A3A3A]/80 mt-1">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3 sm:mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gradient-to-r from-[#C66A1F] to-[#5C3A00] scale-125"
                  : "bg-[#D6C4B2] hover:bg-[#C66A1F]/50"
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
