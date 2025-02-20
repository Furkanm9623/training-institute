import React from "react";
import { FaCheckCircle, FaClock, FaHome, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-white text-2xl" />,
      title: "Quality Training Courses",
      description: "Comprehensive curriculum designed by industry experts",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "Flexible Training Sessions",
      description: "Choose training schedules that suit your timeline",
    },
    {
      icon: <FaHome className="text-white text-2xl" />,
      title: "Learn At Home",
      description: "Remote learning options available for convenience",
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Friendly and Certified Instructors",
      description: "Learn from experienced industry professionals",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Why Choose BIMBEESInfo-Tech Training?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Using modern resources and study materials, we address your learning
          and training requirements accurately.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-700 mx-auto flex items-center justify-center rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
