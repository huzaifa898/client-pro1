import React from 'react';
import { FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section className="bg-yellow-100 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text & Icons */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold text-black">Get in Touch</h2>
          <p className="text-lg text-black mt-4">
            We are looking forward to starting a project with you!
          </p>
          <p className="text-lg text-gray-800 mt-2">
            Etiam sit amet convallis erat – class aptent taciti sociosqu ad
            litora torquent per conubia!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            {/* Social Icons */}
            <a href="#" className="text-black hover:text-gray-800">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FaTiktok size={28} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FaYoutube size={28} />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-1/2">
          <form className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 bg-gray-800 border-b-2 border-lime-400 text-white placeholder-gray-500 focus:outline-none"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 bg-gray-800 border-b-2 border-lime-400 text-white placeholder-gray-500 focus:outline-none"
                placeholder="Enter a valid email address"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 bg-gray-800 border-b-2 border-lime-400 text-white placeholder-gray-500 focus:outline-none"
                placeholder="Enter your message"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-lime-400 bg-gray-800 border-none focus:ring-0"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-400"
              >
                I accept the <span className="text-lime-400">Terms of Service</span>
              </label>
            </div>
            <button className="w-full p-3 bg-lime-400 text-black rounded-lg hover:bg-lime-500 transition-all duration-300">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
