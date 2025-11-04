import React, { useState, useMemo } from "react";
import ProductCard from "../product/ProductCard";
import products from "../../data/products";

const ProductCatalogue = () => {
  // Dynamically get all unique categories from products
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, []);

  // Default to the first category
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");

  // Filtered products based on selected category
  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section
      id="products"
      className="relative py-20 bg-gradient-to-b from-[#F5E9DA] to-[#FFFFFF]"
    >
      {/* Soft background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C66A1F]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-extrabold text-[#3A3A3A] mb-4">
            Our <span className="text-[#C66A1F]">Product Catalogue</span>
          </h2>
          <p className="text-[#5C3A00] max-w-2xl mx-auto text-base leading-relaxed font-[Lato]">
            Discover products crafted with care and authenticity — blending
            nutrition, taste, and freshness.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 bg-white/60 backdrop-blur-sm border border-[#C66A1F]/20 rounded-full px-3 py-3 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-[Lato] font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#C66A1F] to-[#5C3A00] !text-white shadow-lg scale-105"
                    : "text-[#5C3A00] hover:text-[#C66A1F] hover:bg-[#C66A1F]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={`${product.category}-${product.id}`}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-[#5C3A00] mt-12 text-lg font-medium">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
