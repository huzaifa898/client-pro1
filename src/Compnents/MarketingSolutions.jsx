import React from "react";
import { motion } from "framer-motion";

const MarketingSection = () => {
  // Animation for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.3,
      },
    },
  };

  // Animation for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.6,
      },
    },
  };

  return (
    <div className="bg-lime-400 py-16">
      <motion.h2
        className="text-center text-4xl font-bold text-black mb-16"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        We Create Marketing Solutions
      </motion.h2>
      <div className="flex justify-center space-x-6">
        {["Agility", "Strength", "Quickness", "Power"].map((title, index) => (
          <motion.div
            key={index}
            className="bg-black text-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-6"
            style={{ width: "250px", height: "450px" }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={`https://via.placeholder.com/200x200?text=${title}`}
              alt={title}
              className="mb-4"
            />
            <h3 className="text-lime-400 text-xl font-semibold mb-4">{title}</h3>
            <p className="text-sm text-center mb-6">
              Sem integer vitae justo eget magna fermentum iaculis eu. Erat
              pellentesque adipiscing commodo elit at imperdiet dui. Nec
              sagittis aliquam malesuada bibendum.
            </p>
            <a
              href="#"
              className="text-lime-400 font-bold underline mt-auto mb-8"
            >
              MORE
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketingSection;
