import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Award, Shield, Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            transition={{ duration: 0.8 }}
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
              className="bg-gray-500 inline-flex items-center px-8 py-3 bg-emeraldGreen text-white rounded-full hover:bg-cobaltBlue transition-colors"
            >
              Explore Products <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section ref={ref} className="py-14 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-deepTeal">
              Featured Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections designed to elevate your interior spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
                      Explore Collection <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections can follow the same animation patterns */}
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
];

export default Home;
