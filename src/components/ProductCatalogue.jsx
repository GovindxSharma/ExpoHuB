import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mango Snacks",
    description: "Delicious sun-dried mango slices packed with natural sweetness and nutrients.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Mango20gm.png",
  },
  {
    id: 2,
    name: "Strawberry Slices",
    description: "Crispy freeze-dried strawberry slices bursting with real fruity flavor.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Strawberry-20-gm.png",
  },
  {
    id: 3,
    name: "Pomegranate Kernel",
    description: "Crunchy and tangy dried pomegranate kernels rich in antioxidants and fiber.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Pomegranate20gm-1463x2048.png",
  },
  {
    id: 4,
    name: "Pineapple Slices",
    description: "Tropical, tangy pineapple slices dried to perfection for a sweet and zesty snack.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Pineapple20gm.png",
  },
  {
    id: 5,
    name: "Custard Apple Snacks",
    description: "Naturally sweet custard apple bites packed with creamy flavor and nutrients.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Custard-Apple20gm-1463x2048.png",
  },
  {
    id: 6,
    name: "Chikoo Slices",
    description: "Wholesome dried chikoo slices offering a rich, caramel-like sweetness.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Chikoo20gm-1463x2048.png",
  },
  {
    id: 7,
    name: "Black Jamun Snacks",
    description: "Tangy-sweet black jamun snacks packed with natural goodness and antioxidants.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Black-Jamun20gm-1463x2048.png",
  },
  {
    id: 8,
    name: "Banana Slices",
    description: "Crispy and naturally sweet banana chips made from ripe, handpicked bananas.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Banana-20gm.png",
  },
  {
    id: 9,
    name: "Apple Slices",
    description: "Light, crunchy apple slices that retain the natural sweetness of fresh apples.",
    image: "https://hampsbio.com/wp-content/uploads/2023/11/Apple-14gm-1463x2048.png",
  },
];

const ProductCatalogue = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-indigo-50">
      {/* Background glow effects */}
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative flex items-center justify-center bg-gray-50 h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-60 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Button aligned to right */}
                <div className="mt-4 flex justify-end">
                  <button className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300">
                    Request Quotation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
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
