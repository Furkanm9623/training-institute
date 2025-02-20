import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaWhatsapp, FaUser } from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div className="bg-gray-800 text-white text-sm py-2 px-4 lg:px-6 flex flex-wrap justify-between items-center">
      {/* Left Section: Institute Logo */}
      <div className="flex items-center space-x-3">
        <img src="https://via.placeholder.com/100x40" alt="Institute Logo" className="h-10" />
      </div>

      {/* Middle Section: Social Media & Contact Details */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex space-x-3">
          <FaTwitter className="text-yellow-400 cursor-pointer" />
          <FaFacebookF className="text-yellow-400 cursor-pointer" />
          <FaInstagram className="text-yellow-400 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <span>800 800 050 (UAE)</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <span>+971 4 228 1166</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaWhatsapp />
          <span>+971 562184557</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>contact@arabianinfotech.com</span>
        </div>
      </div>

      {/* Right Section: Navigation Links, Flags, and Register Button */}
      <div className="flex items-center space-x-4">
        <nav className="hidden lg:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact Us</a>
        </nav>
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-6 h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_United_Arab_Emirates.svg" alt="UAE" className="w-6 h-4" />
        </div>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded flex items-center space-x-2 font-bold">
          <FaUser />
          <span>REGISTER NOW</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
