import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section with Background Image */}
      <div className="relative bg-black text-white text-center">
        <img
          src="https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg" // Replace with actual image URL
          alt="Team Meeting"
          className="w-full h-64 object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:flex lg:space-x-12">
        {/* Left Column - About Text */}
        <div className="lg:w-2/3 text-gray-700">
          <p className="mb-4">
            While there are hundreds of digital marketing agencies, there are only a handful who are
            comprehensive and very responsive; offering full-scope digital and traditional marketing services,
            catering to your needs and on your timeline. We have a US-based team of 15-20 members with
            offices in Charlotte NC, Greenville SC, and London UK.
          </p>
          <p className="font-bold text-gray-900">
            We are unicorns; especially when it comes to organic, high domain authority link-building, also
            known as offsite search engine optimization (SEO).
          </p>
          <p className="mt-4">
            We offer the sweet spot intersection of search marketing, public relations, strategic marketing to
            give you RESULTS in today’s and tomorrow’s ever-evolving digital marketing environment.
          </p>
        </div>

        {/* Right Column - Industries */}
        <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industries</h2>
          <p className="text-gray-700 mb-2">
            10x digital has extensive experience and skill sets in these industries and more:
          </p>
          <ul className="text-gray-800 grid grid-cols-2 gap-2">
            <li>Health</li>
            <li>Wellness</li>
            <li>Insurance</li>
            <li>Student housing</li>
            <li>Senior housing</li>
            <li>Financial</li>
            <li>Manufacturing</li>
            <li>High-tech</li>
            <li>Cloud/SAAS</li>
            <li>Non-profit</li>
            <li>Higher education</li>
            <li>Resort</li>
            <li>Commercial real estate</li>
            <li>Online gaming</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
