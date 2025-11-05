// src/components/product/ProductCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    packaging: "",
    notes: "",
  });
  const [resultModal, setResultModal] = useState("");
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("product", product.name);
    submitData.append("quantity", formData.quantity);
    submitData.append("packaging", formData.packaging);
    submitData.append("notes", formData.notes);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });
      const data = await response.json();

      if (data.success) {
        setShowConfetti(true);
        setResultModal("✅ Your custom quotation request has been sent successfully!");
        setShowResultModal(true);
        setFormData({
          name: "",
          email: "",
          quantity: "",
          packaging: "",
          notes: "",
        });
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        setResultModal("❌ Server busy. Please try again later.");
        setShowResultModal(true);
      }
    } catch (err) {
      setResultModal("⚠️ Network error. Please try again.");
      setShowResultModal(true);
    }
  };

  return (
    <>
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}

      {/* Product Card */}
      <div
        onClick={() => navigate(`/products/${product.id}`)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group bg-[#FFFFFF] rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#F5E9DA] hover:-translate-y-1 flex flex-col justify-between h-full cursor-pointer"
      >
        <div className="relative flex items-center justify-center bg-[#F5E9DA] h-56 overflow-hidden">
          <img
            src={hovered && product.images?.[1] ? product.images[1] : product.images?.[0]}
            alt={product.name}
            className="max-h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#3A3A3A] mb-2 group-hover:text-[#C66A1F] transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-[#5C3A00]/80 text-sm mb-3 line-clamp-3">
              {product.description}
            </p>
          </div>
          <div className="flex justify-end mt-4">
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
            <h2 className="text-2xl font-bold mb-4 text-[#5C3A00]">Customize Your Order</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">Product</label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">Quantity (kgs)</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  min="10"
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                  required
                />
                <p className="text-xs text-[#5C3A00]/70 mt-1">Minimum order: 10 kgs</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-2">Packaging Options</label>
                <div className="flex flex-col gap-2 text-sm text-[#3A3A3A]">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="packaging"
                      value="bulk"
                      checked={formData.packaging === "bulk"}
                      onChange={handleChange}
                      required
                    /> Bulk Bags
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="packaging"
                      value="retail"
                      checked={formData.packaging === "retail"}
                      onChange={handleChange}
                      required
                    /> Retail Packs
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="packaging"
                      value="private"
                      checked={formData.packaging === "private"}
                      onChange={handleChange}
                      required
                    /> Private Label
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3A3A3A] mb-1">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements?"
                  className="w-full border border-[#F5E9DA] rounded-lg p-2 h-24 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                ></textarea>
              </div>

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

      {/* Result Modal */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#FFFFFF] rounded-xl p-6 max-w-md w-full text-center shadow-2xl">
            <p className="text-[#3A3A3A]">{resultModal}</p>
            <button
              onClick={() => setShowResultModal(false)}
              className="mt-4 px-6 py-2 bg-[#C66A1F] text-white rounded-lg hover:bg-[#5C3A00] transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
