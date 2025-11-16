import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/products";
import ProductCard from "./ProductCard"; // reuse your ProductCard

const OtherCategories = ({ currentCategory }) => {
  const navigate = useNavigate();

  // Unique categories
  const allCategories = [...new Set(productsData.map((p) => p.category))];

  // Only other categories
  const otherCategories = allCategories.filter(
    (cat) => cat !== currentCategory
  );

  // Collect all products from other categories
  const otherCategoryProducts = productsData.filter(
    (p) => p.category !== currentCategory
  );

  // Shuffle and pick 6
  const recommendedProducts = otherCategoryProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  if (otherCategories.length === 0) return null;

  return (
    <div className="mt-24">
      <h2 className="text-3xl  font-bold text-[#3A3A3A] mb-6 text-center">
        Explore Our Other Categories
      </h2>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center  gap-4 mb-10">
        {otherCategories.map((category, i) => (
          <button
            key={i}
            onClick={() => navigate(`/products?category=${category}`)}
            className="px-6 py-3 text-[#C66A1F] border border-[#C66A1F] rounded-xl hover:bg-[#F5E9DA] transition font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OtherCategories;
