import React from "react";
import ProductCard from "../product/ProductCard";
import products from "../../data/products";

const ProductCatalogue = () => {
  return (
    <section
      id="products"
      className="relative py-16 bg-gradient-to-b from-[#F5E9DA] to-[#FFFFFF]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C66A1F]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-extrabold text-[#3A3A3A] mb-3">
            Our{" "}
            <span className="text-[#C66A1F]">
              Product Catalogue
            </span>
          </h2>
          <p className="text-[#5C3A00] max-w-2xl mx-auto text-base leading-relaxed font-[Lato]">
            Explore our range of export-quality products crafted with care and precision — 
            combining authentic flavor with world-class freshness.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProductCatalogue;
