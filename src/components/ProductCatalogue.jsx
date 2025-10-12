import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Mango Snacks",
    description: "Delicious sun-dried mango slices packed with natural sweetness and nutrients.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Mango20gm.png",
    price: 1200,
    qty: "kg",
  },
  {
    id: 2,
    name: "Strawberry Slices",
    description: "Crispy freeze-dried strawberry slices bursting with real fruity flavor.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Strawberry-20-gm.png",
    price: 1500,
    qty: "kg",
  },
  {
    id: 3,
    name: "Pomegranate Kernel",
    description: "Crunchy and tangy dried pomegranate kernels rich in antioxidants and fiber.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Pomegranate20gm-1463x2048.png",
    price: 1800,
    qty: "kg",
  },
  {
    id: 4,
    name: "Pineapple Slices",
    description: "Tropical, tangy pineapple slices dried to perfection for a sweet and zesty snack.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Pineapple20gm.png",
    price: 1300,
    qty: "kg",
  },
  {
    id: 5,
    name: "Custard Apple Snacks",
    description: "Naturally sweet custard apple bites packed with creamy flavor and nutrients.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Custard-Apple20gm-1463x2048.png",
    price: 1400,
    qty: "kg",
  },
  {
    id: 6,
    name: "Chikoo Slices",
    description: "Wholesome dried chikoo slices offering a rich, caramel-like sweetness.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Chikoo20gm-1463x2048.png",
    price: 1250,
    qty: "kg",
  },
  {
    id: 7,
    name: "Black Jamun Snacks",
    description: "Tangy-sweet black jamun snacks packed with natural goodness and antioxidants.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Black-Jamun20gm-1463x2048.png",
    price: 1600,
    qty: "kg",
  },
  {
    id: 8,
    name: "Banana Slices",
    description: "Crispy and naturally sweet banana chips made from ripe, handpicked bananas.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Banana-20gm.png",
    price: 1100,
    qty: "kg",
  },
  {
    id: 9,
    name: "Apple Slices",
    description: "Light, crunchy apple slices that retain the natural sweetness of fresh apples.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Apple-14gm-1463x2048.png",
    price: 1350,
    qty: "kg",
  },
];


const ProductCatalogue = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section id="products" className="relative py-16 bg-gradient-to-b from-white to-indigo-50">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-indigo-600">Product Catalogue</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Explore our range of export-quality products designed for global standards.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-md"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
