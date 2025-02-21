import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  // WhatsApp Number & Pre-filled Message
  const phoneNumber = "918584009623"; // No '+', no spaces, just country code + number
  const message = encodeURIComponent(`📌 Hi, BimBess Ltd! 
    I’m eager to explore your training courses and understand the enrollment process. 
    Can you share the details? Looking forward to connecting! 😊`);
    

  // Function to Open WhatsApp Chat with Pre-filled Message
  const openWhatsApp = () => {
    const phoneNumber = "918584009623";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
  
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(url, "_blank");
    } else {
      // alert("Please manually type the message in WhatsApp Web.");
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
    }
  }
  

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-3 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2" onClick={()=>navigate('/')}>
          <img
            src="https://i.pinimg.com/236x/ba/93/38/ba9338d1b2d869497e27bee86cef8f8d.jpg"
            alt="logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="text-lg font-bold">BIMBEES INFO TECH LTD.</span>
        </div>

        {/* Middle Section: Contact Details (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>+91 789654123</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>205056393 (UAE)</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={openWhatsApp}>
            <FaWhatsapp className="text-green-400" />
            <span className="hover:text-green-400 transition">+91 8584009623</span>
          </div>
          <div className="flex items-center space-x-2">
  <FaEnvelope />
  <a href="mailto:bimbessinfotech@gmail.com" className="hover:text-yellow-400 transition">
    bimbessinfotech@gmail.com
  </a>
</div>
        </div>

        {/* Right Section: Navigation & India Flag */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link onClick={scrollToContact} className="hover:text-yellow-400 transition">Contact</Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="w-6 h-4"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute top-full w-full left-0">
          <Link to="/" className="block py-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="flex justify-center mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              className="w-6 h-4"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;