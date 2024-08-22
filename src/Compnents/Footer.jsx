import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mb-8">
          <h4 className="text-white text-lg font-bold mb-4">Company</h4>
          <ul>
            <li className="mb-2 hover:text-white"><a href="#">About Us</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Careers</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Press</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h4 className="text-white text-lg font-bold mb-4">Services</h4>
          <ul>
            <li className="mb-2 hover:text-white"><a href="#">Web Development</a></li>
            <li className="mb-2 hover:text-white"><a href="#">App Development</a></li>
            <li className="mb-2 hover:text-white"><a href="#">SEO</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Marketing</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="mb-8">
          <h4 className="text-white text-lg font-bold mb-4">Support</h4>
          <ul>
            <li className="mb-2 hover:text-white"><a href="#">Help Center</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Contact Us</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Privacy Policy</a></li>
            <li className="mb-2 hover:text-white"><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
        <p className="text-gray-600">&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
