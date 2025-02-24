import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { submitContactUs } from "../api/contactUsApi";
import { toast } from "react-toastify";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", phone: "" };

    // Email validation (basic regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    // Phone validation (must be 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await submitContactUs(formData);
      if (response.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          navigate("/training-institute");
        }, 2500);
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again later.", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  return (
    <section className="bg-[#121212] text-white py-16" id="contact-us">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-400 mb-10">
          Get in touch with us for quality training courses
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left - Contact Form */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  if (value.length <= 10) {
                    // Restrict to 10 digits
                    setFormData({ ...formData, phone: value });
                  }
                }}
                className={`w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#2A2A2A] text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400">
              <strong>Address</strong>
              <br /> India, Asansol
            </p>
            <p className="text-gray-400 mt-4">
              <strong>Phone</strong>
              <br /> +91 9632587412
            </p>
            <p className="text-gray-400 mt-4">
              <strong>Email</strong>
              <br /> bimbessinfotech@gmail.com
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
