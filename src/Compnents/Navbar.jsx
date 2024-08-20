import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold pl-36">
        <img src="https://assets.nicepagecdn.com/d2cc3eaa/499805/images/logo-1.png" alt="Company Logo" className="h-8 w-auto" />
      </div>
      <div className="flex space-x-4 text-white pr-36">
        <a href="#home" className="hover:text-yellow-500">HOME</a>
        <a href="#about" className="hover:text-yellow-500">ABOUT</a>
        <a href="#blogs" className="hover:text-yellow-500">BLOGS</a>
      </div>
    </nav>
  );
};

export default Navbar;
