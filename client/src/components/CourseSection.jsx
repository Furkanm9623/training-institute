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
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-10 tracking-wide">Our Professional Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer w-full transform transition-all duration-500 hover:scale-105 bg-gray-800"
            style={{ height: "380px" }}
          >
            {/* Background Image with Partial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover rounded-2xl transition-all duration-500"
            />

            {/* Course Info Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-lg text-gray-300">{course.description}</p>
            </div>

            {/* Title Always Visible */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-4 text-lg font-semibold text-center rounded-b-2xl">
              {course.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
