// src/components/product/ProductCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Product Card */}
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        className="group bg-[#FFFFFF] rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#F5E9DA] hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer"
      >
        {/* Image */}
        <div className="relative flex items-center justify-center bg-[#F5E9DA] h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#3A3A3A] mb-2 group-hover:text-[#C66A1F] transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-[#5C3A00]/80 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-[#C66A1F] font-semibold">
              ₹{product.price} / {product.qty}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="px-3 py-2 text-sm font-medium border border-[#C66A1F] text-[#C66A1F] rounded-lg hover:bg-[#C66A1F]/10 transition-all duration-300"
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#F5E9DA] rounded-xl shadow-2xl w-full max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-[#5C3A00]">
              Customize Your Order
            </h2>

            <form className="space-y-4">
              {/* Product */}
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">
                  Product
                </label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">
                  Quantity (kgs)
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  min="10"
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                />
                <p className="text-xs text-[#5C3A00]/70 mt-1">
                  Minimum order: 10 kgs
                </p>
              </div>

              {/* Packaging Options */}
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">
                  Packaging Options
                </label>
                <div className="flex flex-col gap-2 text-sm text-[#3A3A3A]">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="packaging" value="bulk" /> Bulk Bags
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="packaging" value="retail" /> Retail Packs
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="packaging" value="private" /> Private Label
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any special requirements?"
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 h-24 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-[#3A3A3A] border border-[#F5E9DA] rounded-lg hover:bg-[#F5E9DA] transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-medium bg-[#C66A1F] text-white rounded-lg hover:bg-[#5C3A00] transition"
                >
                  Request Custom Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
