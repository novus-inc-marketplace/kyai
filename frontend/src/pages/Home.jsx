import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-light-green flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center px-6"
      >
        <h1 className="text-jungle text-5xl font-extrabold tracking-tight">Barakah Roots</h1>
        <p className="text-neutral text-xl mt-3">Kenya Youth Agricultural Initiative</p>
        <div className="mt-8">
          <a className="bg-primary text-cream px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors" href="/about">Learn More</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;