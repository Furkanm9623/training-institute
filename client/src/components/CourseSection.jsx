import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Civil Structure",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Master STAAD, ETABS, SAFE & PROKON for structural design & analysis.",
  },
  {
    id: 2,
    title: "Special Engineering Courses",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Gain expertise in Revit MEP, AutoCAD (2D & 3D), and more.",
  },
  {
    id: 3,
    title: "MEP Design/Engineering",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    description: "Plumbing, HVAC, Fire Fighting & Electrical training for professionals.",
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 bg-gray-100 text-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12">
        Explore Our Professional Courses
      </h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative group overflow-hidden rounded-2xl shadow-xl bg-white cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            {/* Background Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[230px] sm:h-[270px] md:h-[300px] object-cover rounded-t-2xl transition-all duration-500"
            />

            {/* Course Details */}
            <div className="p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {course.description}
              </p>

              {/* CTA Button */}
              <button
                className="mt-4 inline-block px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
