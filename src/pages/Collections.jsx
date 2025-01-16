import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const Collections = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="bg-lightBeige py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
          Explore Our Collections
        </h1>
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-200 shadow-lg rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              custom={index}
              variants={itemVariants}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {collection.title}
                </h2>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Link
                  to={collection.link}
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-sm rounded-full hover:bg-blue-700 transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
