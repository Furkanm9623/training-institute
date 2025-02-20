import React from "react";

const TrainingSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" // Replace with actual image path
            alt="Training"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Certified HVAC Training & MEP Course in India
          </h2>
          <p className="text-gray-600 mt-4">
            BIMBEESInfo-Tech is a leading institute providing professional
            courses in civil, engineering, MEP, and HVAC training in India.
            To withstand high competition in the job market, we help people
            improve skills through our certified training courses in the UAE.
          </p>
          <p className="text-gray-600 mt-2">
            Our professional courses like ETAP software training, ETABs courses,
            and Revit MEP courses in India have been uniquely designed to ensure
            clear theoretical and practical understanding.
          </p>
          <p className="text-gray-600 mt-2">
            We have highly qualified and expert instructors and dedicated staff
            who will offer the best learning experience to you.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Quality Training", desc: "Modern resources and study materials" },
          { title: "Flexible Sessions", desc: "Convenient timing and schedules" },
          { title: "Expert Instructors", desc: "Industry professionals with experience" },
          { title: "Affordable Fees", desc: "Competitive pricing with quality education" },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="font-bold text-blue-600">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
