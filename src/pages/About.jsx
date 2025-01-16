import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Recycle } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="About LUVIH"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">About LUVIH</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Crafting premium laminates that transform spaces and inspire design excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Since our inception, LUVIH has been at the forefront of laminate innovation,
                combining cutting-edge technology with artistic design to create surfaces that
                inspire and endure.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to quality and sustainability has made us a trusted name in the
                industry, serving architects, designers, and homeowners worldwide.
              </p>
              <p className="text-gray-600">
                We believe in creating products that not only look beautiful but also stand
                the test of time, making every space a masterpiece of durability and design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Our Workshop"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At LUVIH, our values guide everything we do, from product development to
              customer service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in materials and manufacturing",
    icon: <Award size={24} className="text-gray-800" />
  },
  {
    title: "Innovation",
    description: "Continuously pushing boundaries in design and technology",
    icon: <Shield size={24} className="text-gray-800" />
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly practices and materials",
    icon: <Recycle size={24} className="text-gray-800" />
  }
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "1000+", label: "Projects Completed" },
  { value: "50+", label: "Countries Served" },
  { value: "100+", label: "Design Collections" }
];

export default About;