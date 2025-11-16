import React from "react";
import productsData from "../../data/products";
import ProductCard from "./ProductCard";

const ProductsYouMayLike = ({ currentId, currentCategory }) => {
  const relatedProducts = productsData
    .filter(
      (p) => p.category === currentCategory && p.id !== parseInt(currentId)
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-[#3A3A3A] mb-8 text-center">
        Products You May Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsYouMayLike;
