import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section
      className="h-[50vh] w-full flex flex-col justify-center items-center"
      style={{ backgroundColor: '#D4ED00' }}
    >
      <motion.h1
        className="text-black text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}  // Slower transition
      >
        Honesty, Integrity,<br />And Accountability
      </motion.h1>
      <motion.button
        className="mt-6 bg-black text-yellow-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.5 }}  // Slower transition with delay
      >
        LEARN MORE
      </motion.button>
    </section>
  );
};

export default Banner;
