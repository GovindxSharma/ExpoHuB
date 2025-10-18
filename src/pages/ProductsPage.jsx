import React, { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/product/ProductCard"; // make sure this path is correct

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using local dummy data for now
    setProducts(productsData);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
         Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available.</p>
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
