import React from 'react';
import { FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const Response = () => {
  return (
    <section className="bg-lime-400 text-black py-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side: Text and Icons */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-2xl font-bold mb-4">
            HEY! WE ARE LOOKING FORWARD <br /> TO START A PROJECT WITH YOU!
          </p>
          <p className="mb-4">
            Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! 
            Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 text-2xl">
            <FaFacebookF />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-300 rounded-lg h-32"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">
                  I accept the <span className="text-red-500">Terms of Service</span>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Response;
