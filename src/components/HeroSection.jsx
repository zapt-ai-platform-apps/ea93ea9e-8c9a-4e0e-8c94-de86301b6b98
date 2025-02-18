import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection component displaying an animated hero title with gradient styling.
 * @returns {JSX.Element}
 */
const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-16 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
      >
        Discover the Co-ord Sets Your Little One Will Love!
      </motion.h2>
    </section>
  );
};

export default HeroSection;