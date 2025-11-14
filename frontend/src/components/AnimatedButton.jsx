
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-primary text-cream px-6 py-3 rounded-md text-lg font-medium ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
