import React from "react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const features = [
    { title: "Energy Efficiency", desc: "Reduces power consumption by up to 30%", color: "bg-blue-500" },
    { title: "Advanced Control Systems", desc: "Automated temperature & humidity control", color: "bg-green-500" },
    { title: "Sustainable Materials", desc: "Eco-friendly components for sustainability", color: "bg-purple-500" },
    { title: "Smart Sensors", desc: "Real-time monitoring & alerts", color: "bg-red-500" },
    { title: "Heat Recovery Systems", desc: "Maximizes energy reuse", color: "bg-yellow-500" },
    { title: "Low Maintenance", desc: "Designed for long-term cost savings", color: "bg-teal-500" },
  ];

  const images = [
    "https://t4.ftcdn.net/jpg/04/85/59/95/360_F_485599553_gxWaE8AmLEdpLRTS4iHvyBxhNoXMF4X5.jpg",
    "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url('${images[0]}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold">HVAC System Design</h1>
          <p className="mt-4 text-lg text-gray-300">Optimizing HVAC efficiency for modern commercial buildings.</p>
        </motion.div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center text-white ${feature.color}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          This HVAC system was implemented in a commercial building with a capacity of 500+ occupants. The design
          incorporated variable refrigerant flow (VRF) systems, automated air handling units, and heat recovery ventilators.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Implementation Steps</h3>
        <ul className="list-disc list-inside text-gray-600 mt-3">
          <li>Initial site survey and heat load calculations</li>
          <li>Selection of energy-efficient HVAC units</li>
          <li>Integration of smart sensors for real-time monitoring</li>
          <li>Installation and testing of air distribution systems</li>
          <li>Post-installation maintenance and efficiency analysis</li>
        </ul>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.img
              key={index}
              src={images[index % 2]}
              alt="HVAC System"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="bg-blue-600 py-12 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Interested in this Project?</h2>
        <p className="mt-3 text-lg">Get in touch with our experts to learn more about implementation.</p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default ProjectDetails;
