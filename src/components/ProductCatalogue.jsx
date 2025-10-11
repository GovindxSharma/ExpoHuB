import React from "react";

const products = [
  {
    id: 1,
    name: "Premium Dry Fruits Mix",
    description: "A healthy mix of hand-picked dry fruits sourced globally.",
    image:
      "https://augasonfarms.com/cdn/shop/articles/freeze-dried-fruits-nutritious-tasty-and-easy-to-take-anywhere-395723_1296x.jpg?v=1744390505",
    category: "Food & Agro",
  },
  {
    id: 2,
    name: "Organic Spices Pack",
    description: "Finest Indian spices, carefully processed and packed for export.",
    image:
      "https://images.unsplash.com/photo-1600783245928-5c5b80e16256?auto=format&fit=crop&w=800&q=80",
    category: "Food & Agro",
  },
  {
    id: 3,
    name: "Handcrafted Ceramic Set",
    description: "Beautiful handmade ceramic dinnerware perfect for export.",
    image:
      "https://images.unsplash.com/photo-1601050690597-89a3b1d25b4b?auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
  },
  {
    id: 4,
    name: "Textile Collection",
    description: "Premium cotton and silk fabrics for global markets.",
    image:
      "https://images.unsplash.com/photo-1560840068-5cc0c0b9d02b?auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
  },
];

const ProductCatalogue = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-indigo-600">Product Catalogue</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of export-quality products designed to meet global standards.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <button className="px-5 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300">
                  Request Quotation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-md">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;
