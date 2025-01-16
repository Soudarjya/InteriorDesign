import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Filter, X } from "lucide-react";

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filterProducts = (category) => {
    if (category === "all") return products;
    return products.filter((product) => product.category === category);
  };

  return (
    <div className="pt-20 pb-12 mt-4 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">
            Discover our extensive collection of premium laminates
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 border bg-slate-300 border-gray-300 rounded-md"
          >
            <Filter size={20} className="mr-2" />
            Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${
              showFilters ? "block" : "hidden"
            } md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-md`}
          >
            <div className="flex justify-between items-center md:hidden mb-4">
              <h3 className="font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    selectedCategory === category.value
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="flex-1">
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filterProducts(selectedCategory).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        {product.code}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {product.finish}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  { label: "All Products", value: "all" },
  { label: "Wood Grain", value: "wood" },
  { label: "Solid Colors", value: "solid" },
  { label: "Metallic", value: "metallic" },
  { label: "Abstract", value: "abstract" },
];

const products = [
  {
    id: 1,
    name: "Natural Oak",
    description: "Classic wood grain pattern with natural oak finish",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    category: "wood",
    code: "LV-001",
    finish: "Matte",
  },
  {
    id: 3,
    name: "Brushed Steel",
    description: "Modern metallic finish with brushed texture",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    category: "metallic",
    code: "LV-003",
    finish: "Metallic",
  },
  {
    id: 4,
    name: "Geometric Flow",
    description: "Contemporary abstract pattern in neutral tones",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    category: "abstract",
    code: "LV-004",
    finish: "Matte",
  },
  {
    id: 5,
    name: "Walnut Classic",
    description: "Rich walnut wood grain pattern",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    category: "wood",
    code: "LV-005",
    finish: "Textured",
  },
  {
    id: 6,
    name: "Charcoal Grey",
    description: "Deep grey solid color with subtle texture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    category: "solid",
    code: "LV-006",
    finish: "Matte",
  },
  {
    id: 2,
    name: "Pure White",
    description: "Clean and minimalist solid white laminate",
    image:
      "https://royaletouche.gumlet.io/wp-content/uploads/2023/02/02113132/CRYSTAL_1123_a4sheet_view.jpg?compress=true&quality=80&w=600&dpr=2.6",
    category: "solid",
    code: "LV-002",
    finish: "Gloss",
  },
];

export default Products;
