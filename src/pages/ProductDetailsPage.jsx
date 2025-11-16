import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products";
import { Share2, PackageCheck, ArrowLeft } from "lucide-react";

const ProductDetailsPage = () => {
  const { id } = useParams();

  // Find product by ID
  const product = productsData.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#3A3A3A] mb-4">
          Product not found
        </h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[#C66A1F] hover:underline text-lg font-medium"
        >
          <ArrowLeft size={18} /> Back to Products
        </Link>
      </div>
    );
  }

  // --------------------- WHATSAPP SAMPLE REQUEST ---------------------
  const whatsappNumber = "918104027533"; // 91 = country code
  const whatsappMessage = `Hi, I want the brochure for ${product.category}: ${product.name}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // ----------------------- SHARE HANDLER ------------------------------
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* ---------- LEFT IMAGE ---------- */}
        <div className="lg:sticky top-24 self-start">
          <div className="relative flex">
            {/* Thumbnail column */}
            {product.images?.length > 1 && (
              <div className="flex flex-col gap-3 mr-3">
                {product.images.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedImage === img
                        ? "border-[#C66A1F] scale-105 shadow-md"
                        : "border-[#E9DCC5] hover:border-[#C66A1F]/80"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="bg-[#F5E9DA] rounded-3xl p-5 sm:p-6 border border-[#C66A1F]/20 shadow-sm flex-1">
              <img
                src={selectedImage}
                alt={product.name}
                className="rounded-2xl object-contain w-full h-[350px] sm:h-[420px] md:h-[500px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ---------- RIGHT DETAILS ---------- */}
        <div className="text-[#3A3A3A] flex flex-col">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              {product.name}
            </h1>
            <p className="text-[#5C3A00]/80 text-base sm:text-lg leading-relaxed mb-2">
              <span className="font-semibold text-[#C66A1F]">Category:</span>{" "}
              {product.category}
            </p>
            <p className="text-[#5C3A00]/80 text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-8">
            {/* WhatsApp Sample Button */}
            <button
              onClick={() => window.open(whatsappURL, "_blank")}
              className="flex items-center justify-center gap-2 px-7 py-3 bg-[#C66A1F] text-white rounded-xl font-semibold hover:bg-[#5C3A00] transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <PackageCheck size={18} /> Request Brochure & Sample
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 px-7 py-3 border border-[#C66A1F] text-[#C66A1F] rounded-xl font-medium hover:bg-[#F5E9DA] transition-all duration-300 w-full sm:w-auto"
            >
              <Share2 size={18} /> Share
            </button>
          </div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[#C66A1F] border border-[#C66A1F]/40 rounded-xl font-medium hover:bg-[#F5E9DA] transition-all duration-300"
            >
                <ArrowLeft size={18} /> Back to Products
            </Link>
          </div>

          {/* Info sections */}
          <div className="space-y-8 pt-10 border-t border-[#E9DCC5] mt-10">
            <div>
              <h3 className="text-2xl font-semibold mb-3">About the Product</h3>
              <p className="text-[#5C3A00]/90 leading-relaxed text-sm sm:text-base">
                {product.name} are delicious, ready-to-eat snacks made using
                advanced dehydration or blending techniques to preserve flavor,
                nutrients, and freshness. A perfect balance of taste and
                nutrition with no artificial preservatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Who Can Eat</h3>
              <p className="text-[#5C3A00]/90 leading-relaxed text-sm sm:text-base">
                Ideal for kids, adults, and fitness enthusiasts. Great for
                school snacks, office lunches, gym recovery, or healthy travel
                munching.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">How to Use</h3>
              <p className="text-[#5C3A00]/90 leading-relaxed text-sm sm:text-base">
                Enjoy directly from the pack or add to cereals, smoothies,
                yogurt, desserts, or toast. A convenient, nutrient-packed snack
                for any time of the day.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">What You Get</h3>
              <ul className="list-disc list-inside text-[#5C3A00]/90 leading-relaxed text-sm sm:text-base space-y-1">
                <li>100% natural ingredients</li>
                <li>No preservatives or refined sugar</li>
                <li>Gluten-free and vegan friendly</li>
                <li>Sealed in a food-grade, multi-layer pouch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">How to Store</h3>
              <p className="text-[#5C3A00]/90 leading-relaxed text-sm sm:text-base">
                Store in a cool, dry place away from sunlight. Once opened,
                reseal tightly to maintain freshness. Shelf life:{" "}
                {product.shelfLife || "180"} days from manufacture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
