import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-cream text-barakah-text text-center py-20 md:py-32">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-display text-deep-olive"
          variants={itemVariants}
        >
          Plant a Tree. Grow a Future.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Barakah Roots empowers Kenyan youth to plant income-generating fruit trees — building jobs, cooling cities and feeding families.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          variants={itemVariants}
        >
          <Link
            to="/adopt"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-light-green text-white font-semibold shadow-md transform transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-light-green/40"
          >
            Adopt a Seedling
          </Link>
          <Link
            to="/volunteer"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-warm-sand text-deep-olive font-semibold shadow-md transform transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-warm-sand/40"
          >
            Join a Planting Drive
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;