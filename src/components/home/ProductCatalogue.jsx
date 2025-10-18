import React, { useState } from "react";
import ProductCard from "../product/ProductCard";
import products from "../../data/products";

const ProductCatalogue = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section id="products" className="relative py-16 bg-gradient-to-b from-white to-indigo-50">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-indigo-600">Product Catalogue</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Explore our range of export-quality products designed for global standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-md"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
