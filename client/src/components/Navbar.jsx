import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = "918584009623";
  const message = encodeURIComponent(`📌 Hi, BimBess Ltd! 
I’m eager to explore your training courses and understand the enrollment process. 
Can you share the details? Looking forward to connecting! 😊`);

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.open(
      isMobile
        ? url
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-3 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/training-institute")}
        >
          <img
            src="https://i.pinimg.com/236x/ba/93/38/ba9338d1b2d869497e27bee86cef8f8d.jpg"
            alt="logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="text-lg font-bold">BIMBEES INFO TECH LTD.</span>
        </div>

        <div className="hidden lg:flex space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>+91 789654123</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>205056393 (UAE)</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={openWhatsApp}
          >
            <FaWhatsapp className="text-green-400" />
            <span className="hover:text-green-400 transition">
              +91 8584009623
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a
              href="mailto:bimbessinfotech@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              bimbessinfotech@gmail.com
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/training-institute"
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link
            onClick={scrollToContact}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="w-6 h-4"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute top-full w-full left-0">
          <Link
            to="/training-institute"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col items-center mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>+91 789654123</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>205056393 (UAE)</span>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={openWhatsApp}
            >
              <FaWhatsapp className="text-green-400" />
              <span className="hover:text-green-400 transition">
                +91 8584009623
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <a
                href="mailto:bimbessinfotech@gmail.com"
                className="hover:text-yellow-400 transition"
              >
                bimbessinfotech@gmail.com
              </a>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-6 h-4 mt-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
