import React, { useEffect, useState } from "react";
import driedFruits from "../data/driedfruits";
import nutButters from "../data/nutbutter";
import muesliBars from "../data/mueslibars";
import ProductCard from "../components/product/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Combine all categories
    const allProducts = [
      ...driedFruits.map((p) => ({ ...p, category: "Freeze-Dried Fruits" })),
      ...nutButters.map((p) => ({ ...p, category: "Nut Butters" })),
      ...muesliBars.map((p) => ({ ...p, category: "Muesli & Bars" })),
    ];
    setProducts(allProducts);
  }, []);

  const categories = ["All", "Freeze-Dried Fruits", "Nut Butters", "Muesli & Bars"];

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#C66A1F] text-white border-[#C66A1F]"
                : "border-[#C66A1F] text-[#5C3A00] hover:bg-[#C66A1F]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-[#5C3A00]/80">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.category}-${product.id}`} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
