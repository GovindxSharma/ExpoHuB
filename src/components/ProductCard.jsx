import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Product Card */}
      <div
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col justify-between h-full"
      >
        {/* Image */}
        <div className="relative flex items-center justify-center bg-gray-50 h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          {/* Title + Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-4">
            {/* Price / Quantity from product props */}
            <span className="text-gray-800 font-semibold text-sm">
              ₹{product.price} / {product.qty}
            </span>

            {/* Customize Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-2 text-sm font-medium border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300"
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Customize Your Order
            </h2>

            <form className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Selection
                </label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (lbs)
                </label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  min="10"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum order: 10 lbs
                </p>
              </div>

              {/* Packaging Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Packaging Options
                </label>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
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

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any special requirements?"
                  className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
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
