import React, { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/product/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-5 py-16">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C66A1F]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/10 blur-3xl rounded-full"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#3A3A3A]">
        Our <span className="text-[#C66A1F]">Products</span>
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-[#5C3A00]/80">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
