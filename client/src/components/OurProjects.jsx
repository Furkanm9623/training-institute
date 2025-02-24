import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HVAC System Design",
    description: "Designed an energy-efficient HVAC system for a commercial building.",
    image: "https://remars.co.uk/wp-content/uploads/2018/08/MEP-1-800x600.jpg",
    link: "/project-details/1",
  },
  {
    id: 2,
    title: "Plumbing Network Optimization",
    description: "Developed a water supply and drainage system for a high-rise apartment.",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
    link: "/project-details/2",
  },
  {
    id: 3,
    title: "Fire Protection System",
    description: "Installed a fire suppression and alarm system for an industrial plant.",
    image: "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg",
    link: "/project-details/3",
  },
  {
    id: 4,
    title: "Electrical Load Distribution",
    description: "Optimized electrical load balancing for a smart building project.",
    image: "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
    link: "/project-details/4",
  },
];

const OurProjects = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Projects</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer w-full transform transition-all duration-500 hover:scale-105"
              onClick={() => navigate(project.link)}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-72 lg:h-96 object-cover rounded-2xl transition-all duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

              {/* Project Info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                <p className="text-sm md:text-lg text-gray-300">{project.description}</p>
                <button
                  className="mt-3 md:mt-4 border-2 border-white px-3 md:px-5 py-1.5 md:py-2 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-700 hover:shadow-lg hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(project.link);
                  }}
                >
                  For More Details, Click Here
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurProjects;
