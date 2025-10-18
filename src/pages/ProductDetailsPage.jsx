// src/pages/ProductDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Product not found</h2>
        <Link to="/products" className="text-indigo-600 hover:underline mt-4 block">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      {/* Layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* IMAGE GALLERY */}
        <div className="relative flex flex-col items-center">
          <div className="bg-gray-50 rounded-3xl shadow-sm p-6 flex items-center justify-center w-full">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl object-contain w-full h-[400px] md:h-[480px] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thumbnail previews */}
          <div className="flex gap-3 mt-5">
            {product.images?.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="w-20 h-20 object-cover rounded-xl border border-gray-200 hover:border-indigo-500 hover:scale-105 transition-all cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-semibold text-indigo-600">
              ₹{product.price}
            </span>
            <span className="text-gray-500 text-base">/ {product.qty}</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              In Stock
            </span>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">
              Fast Delivery
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
              Add to Cart
            </button>

            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-800 rounded-xl font-medium hover:bg-gray-100 transition text-center"
            >
              ← Back to Products
            </Link>
          </div>

          {/* Divider */}
          <hr className="my-10 border-gray-200" />

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why You’ll Love It
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Made from 100% natural ingredients</li>
              <li>No preservatives, artificial flavor, or sugar</li>
              <li>Rich in nutrients and retains authentic taste</li>
              <li>Ideal for snacking or blending into smoothies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
