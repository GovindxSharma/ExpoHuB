import React, { useState, useMemo } from "react";
import productsData from "../data/products";
import ProductCard from "../components/product/ProductCard";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract all unique categories dynamically from products
  const categories = useMemo(() => {
    return ["All", ...new Set(productsData.map((p) => p.category))];
  }, []);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  // Handle click — always allows "All" to reset filtering
  const handleCategoryClick = (cat) => {
    if (cat === "All") {
      setSelectedCategory("All"); // reset to full list
    } else {
      setSelectedCategory(cat);
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-5 py-16">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C66A1F]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/10 blur-3xl rounded-full"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#3A3A3A]">
        Our <span className="text-[#C66A1F]">Products</span>
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#C66A1F] !text-white border-[#C66A1F] shadow-md scale-105"
                : "border-[#C66A1F] text-[#5C3A00] hover:text-[#C66A1F] hover:bg-[#C66A1F]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-[#5C3A00]/80">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={`${product.category}-${product.id}`}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
