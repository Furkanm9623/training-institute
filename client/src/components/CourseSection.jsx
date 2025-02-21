import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Civil Structure",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Learn STAAD, ETABS, SAFE, and PROKON for efficient structural analysis and design.",
  },
  {
    id: 2,
    title: "Special Engineering Courses",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Gain expertise in Revit MEP, AutoCAD (2D & 3D), and specialized engineering skills.",
  },
  {
    id: 3,
    title: "MEP Design/Engineering",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Plumbing, HVAC, Fire Fighting, Electrical - Advance your career with professional MEP training.",
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-10 tracking-wide">
        Our Professional Courses
      </h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer w-full transform transition-all duration-500 hover:scale-105 bg-gray-800"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl transition-all duration-500"
            />

            {/* Course Info Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                {course.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-lg text-gray-300">{course.description}</p>
            </div>

            {/* Always Visible Title */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2 sm:py-4 text-sm sm:text-lg font-semibold text-center rounded-b-2xl">
              {course.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
