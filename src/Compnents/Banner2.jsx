import React from 'react';
import { motion } from 'framer-motion';

const Banner2 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 }, // Cards start further down
    visible: { opacity: 1, y: 0 },  // Cards move to their final position
  };

  return (
    <section
      className="h-[50vh] w-full bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url('https://img.freepik.com/free-photo/professional-businesswoman-front-modern-building_23-2147702123.jpg?t=st=1724157703~exp=1724161303~hmac=34dbf9a2236a3f0f98da899a2c6e40dc9b26e51931903ce8e381eb6c15d79b5b&w=1380')` }}
    >
      <div className="flex space-x-6 px-4 lg:px-16">
        {['Who We Work Is', 'What We Do', 'Our Values'].map((title, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-4">
              {title === 'Who We Work Is' && 'Classes curated and developed by the industry\'s best talent'}
              {title === 'What We Do' && 'Performance at its highest level with renowned Personal Training.'}
              {title === 'Our Values' && 'A purely authentic Pilates experience that strengthens and creates'}
            </p>
            <button className="mt-4 bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
              LEARN MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Banner2;
