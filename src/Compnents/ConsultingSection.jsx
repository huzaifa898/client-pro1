import React from "react";
import { motion } from "framer-motion";

const ConsultingSection = () => {
  // Define circular animation using Framer Motion's keyframes
  const circularMotion = {
    hidden: { opacity: 0, x: "50vw", y: "-50vh", scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        mass: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <div
      className="relative flex items-center justify-end min-h-screen bg-black px-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/businessmen-working-strategic-planning_53876-97634.jpg?t=st=1724164890~exp=1724168490~hmac=4e6421562bca6d3820116e12de0da3f4c0e532d9f38ccd56c14480e220dd215e&w=1380')`,
        backgroundSize: "cover",
        backgroundPosition: "center left",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-lime-400 space-y-8 flex flex-col items-start text-left max-w-md pr-12"
        variants={circularMotion}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-bold">Strategic Consulting</h2>
        <ul className="text-lg space-y-2">
          <li>Strategic Planning</li>
          <li>Cost Effective Solutions</li>
          <li>Full Disaster Testing</li>
          <li>Complete System Functionality</li>
          <li>Accessible Virtually Anywhere</li>
          <li>Comprehensive Maintenance</li>
        </ul>
        <button className="mt-4 px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition">
          VIEW ALL
        </button>
      </motion.div>
      <div className="absolute bottom-4 right-4 text-xs text-gray-300">
        Image from <a href="https://www.freepik.com" className="underline">Freepik</a>
      </div>
    </div>
  );
};

export default ConsultingSection;
