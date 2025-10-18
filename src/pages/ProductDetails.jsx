// src/pages/ProductDetails.jsx

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
    if (found) {
      setSelectedVariant(found.variants[0]);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          {/* main image */}
          <img
            src={selectedVariant?.image || product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg object-cover"
          />

          {/* thumbnails if multiple */}
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx}`}
                  className="w-20 h-20 rounded-lg object-cover cursor-pointer border border-gray-300 hover:border-indigo-500"
                  onClick={() =>
                    setSelectedVariant({
                      ...selectedVariant,
                      image: img,
                    })
                  }
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* variant selection */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <label className="block font-medium mb-2">Choose Variant:</label>
              <select
                className="border border-gray-300 rounded-lg p-2"
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

          <div className="text-xl font-semibold text-indigo-600 mb-6">
            ₹{selectedVariant?.price}
          </div>

          {product.features && (
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          )}

          {product.additionalInfo && (
            <div className="mb-6 space-y-1 text-gray-600">
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

          <div className="flex gap-4">
            <Link
              to="/products"
              className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              ← Back to Products
            </Link>

            <a
              href="#get-quote"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition"
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
