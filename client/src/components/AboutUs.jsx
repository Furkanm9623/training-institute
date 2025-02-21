import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white mt-8 py-8">
      {/* Hero Section */}
      <section className="flex flex-wrap items-center justify-center md:justify-between max-w-[90%] md:max-w-[75%] mx-auto py-12 px-4 sm:px-6 md:px-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            BIMBees Institute is a premier training center dedicated to Building Information Modeling (BIM), MEP (Mechanical, Electrical, Plumbing) Engineering, and Mechanical Design. We equip aspiring engineers, architects, and construction professionals with the latest industry knowledge and practical skills, ensuring they are job-ready for the evolving AEC (Architecture, Engineering, and Construction) sector.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto max-w-sm sm:max-w-md md:max-w-lg"
          />
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 px-4 sm:px-6 md:px-12 max-w-[90%] md:max-w-[75%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Who We Are</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center">
          We are a leading company specializing in innovative solutions, dedicated to improving industries through technology and expertise. Our team of professionals ensures that we stay ahead with advanced solutions tailored to our clients' needs.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 bg-gray-700 px-4 sm:px-6 md:px-12 max-w-[90%] md:max-w-[75%] mx-auto grid gap-6 md:grid-cols-2 rounded-lg">
        <div className="p-6 bg-gray-600 shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold">Our Mission</h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Our mission is to drive innovation and excellence in every project we undertake, ensuring our clients receive top-tier solutions that enhance efficiency, sustainability, and performance.
          </p>
        </div>
        <div className="p-6 bg-gray-600 shadow-md rounded-lg">
          <h3 className="text-xl sm:text-2xl font-semibold">Our Vision</h3>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            To be a global leader in cutting-edge technology and engineering solutions, creating a future where businesses operate seamlessly and sustainably.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 sm:px-6 md:px-12 max-w-[90%] md:max-w-[75%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Expert Team", "Innovation", "Customer-Centric"].map((title, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-700 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {index === 0 && "A highly skilled and experienced team dedicated to delivering quality solutions."}
                {index === 1 && "We use the latest technology and methodologies to stay ahead."}
                {index === 2 && "Our customers are our priority, and we tailor our services to their needs."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 px-4 sm:px-6 md:px-12 max-w-[90%] md:max-w-[75%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["CEO", "CTO", "Operations Manager"].map((role, index) => (
            <div key={index} className="p-6 bg-gray-700 shadow-md rounded-lg text-center">
              <img
                src={`https://i.pravatar.cc/150?img=${index + 3}`}
                alt={role}
                className="rounded-full mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold">{role}</h3>
              <p className="text-gray-300 text-sm sm:text-base">An expert in their field, leading innovation and growth.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-12 bg-gray-900 px-4 sm:px-6 md:px-12 max-w-[90%] md:max-w-[75%] mx-auto text-center rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Journey</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
          Founded in 2010, our company has grown from a small startup to an industry leader. With milestones that mark our success, we continue to strive for excellence and innovation in every project we undertake.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
