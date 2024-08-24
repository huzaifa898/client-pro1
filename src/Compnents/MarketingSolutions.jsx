import React from "react";
import { motion } from "framer-motion";

// Array of image URLs
const imageUrls = [
  "https://img.freepik.com/free-photo/medium-shot-man-sticking-post-its_23-2149362898.jpg?t=st=1724167218~exp=1724170818~hmac=65cbcd619f0a8d3b80860cc39b5f1aeca3fd1d447f92ef1229d77a299f1ab8db&w=1380",
  "https://img.freepik.com/free-photo/portrait-good-looking-self-satisfied-african-american-guy-working-out-being-strong-masculine-showing-off-biceps-with-raised-hands-looking-serious-challenging-front-as-inviting-gym_176420-36140.jpg?t=st=1724167524~exp=1724171124~hmac=0ae538a9037b4790e6e81c4c137a49f91b433f6f31e7005cde1902a22ef89544&w=1380",
  "https://img.freepik.com/free-photo/happy-exited-bearded-man-black-suit-holding-clock_171337-9701.jpg?t=st=1724167616~exp=1724171216~hmac=5b2774cb92a4e535b75c8a5698e6e75f6c2c5a74c9b5351423e3e3d4366c91e4&w=1380",
  "https://img.freepik.com/free-photo/medium-shot-man-sticking-post-its_23-2149362898.jpg?t=st=1724167218~exp=1724170818~hmac=65cbcd619f0a8d3b80860cc39b5f1aeca3fd1d447f92ef1229d77a299f1ab8db&w=1380"
];

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
    <div className="bg-lime-400 py-12">
      <motion.h2
        className="text-center text-4xl font-bold text-black mb-16"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        We Create Marketing Solutions For Right People To Invest Where
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
              src={imageUrls[index]} // Use the image URL from the array
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
              className="text-lime-400 font-bold underline mt-auto mb-6"
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
