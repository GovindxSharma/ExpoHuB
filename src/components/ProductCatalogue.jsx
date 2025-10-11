import React, { useState } from "react";

const products = [
    {
      id: 1,
      name: "Premium Dry Fruits Mix",
      description: "A healthy mix of hand-picked dry fruits sourced globally.",
      image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      category: "Food & Agro",
    },
    {
      id: 2,
      name: "Organic Spices Pack",
      description: "Finest Indian spices, carefully processed and packed for export.",
      image: "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg",
      category: "Food & Agro",
    },
    {
      id: 3,
      name: "Handcrafted Ceramic Set",
      description: "Beautiful handmade ceramic dinnerware perfect for export.",
      image: "https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg",
      category: "Home Decor",
    },
    {
      id: 4,
      name: "Textile Collection",
      description: "Premium cotton and silk fabrics for global markets.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/032/467/269/small/close-up-shots-illuminating-the-complex-beauty-of-various-woven-textiles-photo.jpg",
      category: "Textiles",
    },
    {
      id: 5,
      name: "Natural Honey",
      description: "Pure, unprocessed honey packed with nutrition and taste.",
      image: "https://images.pexels.com/photos/847078/pexels-photo-847078.jpeg",
      category: "Food & Agro",
    },
    {
      id: 6,
      name: "Organic Tea Leaves",
      description: "Premium handpicked tea leaves from India's finest gardens.",
      image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
      category: "Beverages",
    },
    {
      id: 7,
      name: "Handwoven Baskets",
      description: "Eco-friendly and stylish handwoven baskets made by artisans.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQoYOcg_5A0sUhUn7ycVmTiiG8XGAw8Hzow&s",
      category: "Handicrafts",
    },
    {
      id: 8,
      name: "Jute Bags",
      description: "Durable and reusable jute bags for sustainable exports.",
      image: "https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg",
      category: "Eco Products",
    },
    {
      id: 9,
      name: "Leather Wallets",
      description: "Premium leather wallets crafted for global markets.",
      image: "https://images.pexels.com/photos/326590/pexels-photo-326590.jpeg",
      category: "Accessories",
    },
    {
      id: 10,
      name: "Coconut Shell Crafts",
      description: "Creative handicrafts made from natural coconut shells.",
      image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg",
      category: "Handicrafts",
    },
    {
      id: 11,
      name: "Herbal Cosmetic Set",
      description: "Natural skincare products made with herbal ingredients.",
      image: "https://images.pexels.com/photos/3737587/pexels-photo-3737587.jpeg",
      category: "Cosmetics",
    },
    {
      id: 12,
      name: "Essential Oils Collection",
      description: "Pure essential oils extracted from nature for wellness.",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
      category: "Wellness",
    },
  ];
  
  
  
  
const ProductCatalogue = () => {
  const [visible, setVisible] = useState(8);

  const showMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50">
      {/* Background Orbs */}
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
          {products.slice(0, visible).map((product) => (
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
        {visible < products.length && (
          <div className="text-center mt-14">
            <button
              onClick={showMore}
              className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all duration-300 shadow-md"
            >
              View More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
