import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold text-[#3A3A3A]">
          Product not found
        </h2>
        <Link
          to="/products"
          className="text-[#C66A1F] hover:underline mt-4 block"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* IMAGE GALLERY */}
        <div className="flex flex-col items-center">
          <div className="bg-[#F5E9DA] rounded-3xl shadow-md p-6 flex items-center justify-center w-full border border-[#C66A1F]/20">
            <img
              src={selectedImage}
              alt={product.name}
              className="rounded-2xl object-contain w-full h-[400px] md:h-[480px] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-5 flex-wrap justify-center">
            {product.images?.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-20 h-20 object-cover rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedImage === img
                    ? "border-[#C66A1F]"
                    : "border-[#F5E9DA]/70 hover:border-[#C66A1F]"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold text-[#3A3A3A] leading-snug mb-4">
            {product.name}
          </h1>

          <p className="text-[#5C3A00]/80 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl md:text-4xl font-semibold text-[#C66A1F]">
              ₹{product.price}
            </span>
            <span className="text-[#3A3A3A]/70 text-base">/ {product.qty}</span>
          </div>

          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <span className="px-3 py-1 bg-[#C66A1F]/10 text-[#C66A1F] text-sm rounded-full">
              In Stock
            </span>
            <span className="px-3 py-1 bg-[#5C3A00]/10 text-[#5C3A00] text-sm rounded-full">
              Fast Delivery
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#C66A1F] text-white rounded-xl font-semibold hover:bg-[#5C3A00] transition">
              Add to Cart
            </button>

            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3 border border-[#F5E9DA] text-[#3A3A3A] rounded-xl font-medium hover:bg-[#F5E9DA] transition text-center"
            >
              ← Back to Products
            </Link>
          </div>

          {/* Divider */}
          <hr className="my-10 border-[#F5E9DA]/50" />

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-[#3A3A3A] mb-4">
              Why You’ll Love It
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[#5C3A00]/80">
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
