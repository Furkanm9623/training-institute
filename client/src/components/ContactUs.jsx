import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {


  return (
    <section className="bg-[#121212] text-white py-16" id="contact-us">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-400 mb-10">Get in touch with us for quality training courses</p>

        {/* Contact Form & Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left - Contact Form */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Phone Number" className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Your Message" className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">Submit Message</button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400"><strong>Address</strong><br /> India, Asansol</p>
            <p className="text-gray-400 mt-4"><strong>Phone</strong><br /> +91 9632587412</p>
            <p className="text-gray-400 mt-4"><strong>Email</strong><br /> bimbessinfotech@gmail.com</p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><FaFacebookF size={20} /></a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><FaTwitter size={20} /></a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
