import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Award, Shield, Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="text-darkSlateGray">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190605_04_City_Aerial_4k_057_preview.webm"
              type="video/webm"
            />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mt-9 mb-6 text-white">
              Transform Your Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-champagne">
              Discover our premium collection of laminates, veneers, and plywood
            </p>
            <Link
              to="/products"
              className=" bg-gray-500  inline-flex items-center px-8 py-3 bg-emeraldGreen text-white rounded-full hover:bg-cobaltBlue transition-colors"
            >
              Explore Products <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section ref={ref} className="py-14 bg-[#F5F5DC]">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-deepTeal">
              Featured Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections designed to elevate your interior
              spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="mb-4 opacity-90">{collection.description}</p>
                    <Link
                      to={collection.link}
                      className="inline-flex items-center text-sm font-bold hover:underline"
                    >
                      Explore Collection{" "}
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-deepTeal">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in every aspect of our products and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="bg-gray-00 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-deepTeal">
              Latest Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our newest additions to elevate your space
            </p>
          </motion.div>

          <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="group "
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-darkSlateGray">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const collections = [
  {
    title: "Premium Collection",
    description: "Luxurious designs for sophisticated spaces",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    link: "/collections/premium",
  },
  {
    title: "Designer Series",
    description: "Contemporary patterns for modern interiors",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    link: "/collections/designer",
  },
  {
    title: "Natural Veneers",
    description: "Authentic wood textures and patterns",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    link: "/collections/veneers",
  },
  {
    title: "Rustic Charm",
    description: "Warm, earthy designs inspired by nature",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/rustic-charm",
  },
  {
    title: "Minimal Elegance",
    description: "Sleek and simple designs for modern living",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/minimal-elegance",
  },
  {
    title: "Bold Statements",
    description: "Vivid patterns for a daring look",
    image: "https://images.unsplash.com/photo-1548438294-478651020fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/bold-statements",
  },
  {
    title: "Timeless Classics",
    description: "Enduring designs that never go out of style",
    image: "https://images.unsplash.com/photo-1567016523606-3ffefa4d4e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/timeless-classics",
  },
  {
    title: "Art Deco Glam",
    description: "Geometric patterns and vibrant colors for a vintage feel",
    image: "https://images.unsplash.com/photo-1599058917218-fadaa448997d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/art-deco-glam",
  },
  {
    title: "Urban Vibes",
    description: "Modern industrial designs for urban interiors",
    image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/urban-vibes",
  },
  {
    title: "Tropical Paradise",
    description: "Lush, vibrant designs inspired by the tropics",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/tropical-paradise",
  },
  {
    title: "Monochrome Mood",
    description: "Sophisticated black and white designs",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/monochrome-mood",
  },
  {
    title: "Eco-Living",
    description: "Sustainable and eco-friendly design inspirations",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    link: "/collections/eco-living",
  },
];
const features = [
  {
    title: "Premium Quality",
    description: "Superior materials and craftsmanship in every product",
    icon: <Award size={32} className="text-gray-800" />,
  },
  {
    title: "Durability",
    description: "Built to last with advanced manufacturing techniques",
    icon: <Shield size={32} className="text-gray-800" />,
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable practices and materials for a better future",
    icon: <Recycle size={32} className="text-gray-800" />,
  },
];

const products = [
  {
    name: "Natural Oak",
    category: "Veneers",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
  {
    name: "Modern White",
    category: "Laminates",
    image: "https://images.unsplash.com/photo-1600573472591-ee6981cf35d1",
  },
  {
    name: "Rustic Walnut",
    category: "Plywood",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
  {
    name: "Grey Stone",
    category: "Laminates",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default Home;
