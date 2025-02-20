import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {/* Logo & Description */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500">
            BIMBEES INFO TECH
          </h3>
          <p className="text-gray-400 mt-2">
            BIMBEESInfo-Tech is a Training Institute specializing in academic and vocational training and certification.
          </p>
        </div>

        {/* Our Courses */}
        <div>
          <h3 className="text-lg font-semibold">Our Courses</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">Civil Structure</li>
            <li className="hover:text-yellow-500 cursor-pointer">MEP Design/Engineering</li>
            <li className="hover:text-yellow-500 cursor-pointer">HVAC Training</li>
            <li className="hover:text-yellow-500 cursor-pointer">PLC Training</li>
            <li className="hover:text-yellow-500 cursor-pointer">Revit MEP Course</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Our Services</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <p className="text-gray-400 mt-2">Email: bimbessinfotech@gmail.com</p>
          <p className="text-gray-400 mt-2">Phone: +971 4 XXX XXXX</p>
          <p className="text-gray-400 mt-2">Location: India, Asansol</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-yellow-500 hover:text-yellow-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} BIMBEES Info-Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
