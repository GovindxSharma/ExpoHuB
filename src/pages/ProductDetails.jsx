import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const found = productsData.find((p) => p.slug === slug);
    setProduct(found);
    if (found) setSelectedVariant(found.variants[0]);
  }, [slug]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-[#3A3A3A]/70">
        Product not found.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Images */}
        <div>
          <img
            src={selectedVariant?.image || product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg object-cover border border-[#F5E9DA]"
          />

          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3 flex-wrap">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx}`}
                  className={`w-20 h-20 rounded-lg object-cover cursor-pointer border-2 transition-all duration-300 ${
                    selectedVariant?.image === img
                      ? "border-[#C66A1F]"
                      : "border-[#F5E9DA] hover:border-[#C66A1F]"
                  }`}
                  onClick={() =>
                    setSelectedVariant({ ...selectedVariant, image: img })
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-[#3A3A3A]">{product.name}</h1>
          <p className="text-[#5C3A00]/80 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Variant Selection */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="block font-medium mb-2 text-[#3A3A3A]">
                Choose Variant:
              </label>
              <select
                className="border border-[#F5E9DA] rounded-lg p-2 w-full focus:ring-2 focus:ring-[#C66A1F] focus:border-[#C66A1F]"
                value={selectedVariant?.variantId}
                onChange={(e) => {
                  const v = product.variants.find(
                    (v) => v.variantId.toString() === e.target.value
                  );
                  setSelectedVariant(v);
                }}
              >
                {product.variants.map((v) => (
                  <option key={v.variantId} value={v.variantId}>
                    {v.name} – ₹{v.price}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Price */}
          <div className="text-2xl font-semibold text-[#C66A1F] mb-6">
            ₹{selectedVariant?.price}
          </div>

          {/* Features */}
          {product.features && (
            <ul className="list-disc list-inside text-[#3A3A3A]/90 mb-6 space-y-1">
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          )}

          {/* Additional Info */}
          {product.additionalInfo && (
            <div className="mb-6 space-y-1 text-[#3A3A3A]/80">
              <div>
                <strong>Net Weight:</strong> {product.additionalInfo.netWeight}
              </div>
              <div>
                <strong>Packaging:</strong> {product.additionalInfo.packaging}
              </div>
              <div>
                <strong>Expiry:</strong> {product.additionalInfo.expiry}
              </div>
              <div>
                <strong>Country of Origin:</strong> {product.additionalInfo.countryOfOrigin}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/products"
              className="px-6 py-2 rounded-lg bg-[#F5E9DA] text-[#3A3A3A] border border-[#C66A1F] hover:bg-[#C66A1F] hover:text-white transition"
            >
              ← Back to Products
            </Link>

            <a
              href="#contact"
              className="px-6 py-2 rounded-lg bg-[#C66A1F] text-white font-semibold hover:bg-[#5C3A00] transition"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
