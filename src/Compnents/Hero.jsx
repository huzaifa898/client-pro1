import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?t=st=1724155735~exp=1724159335~hmac=d4946ffe452b842df51af38a9c5abb8ddb5dd02d92a73708ca44bd25dd2c0a93&w=1380')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-start p-24">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }} // Increased duration for slower animation
          className="z-10"
        >
          <img
            src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/logo-1.png"
            alt="Company Logo"
            className="h-24 mb-6"
          />
          <h1 className="text-white text-5xl font-bold leading-tight">
            We Believe In Ethical Practices, <br/> Collaboration, And Innovation
          </h1>
          <div className="mt-8 space-x-6">
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              ABOUT US
            </button>
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              OUR CASES
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
