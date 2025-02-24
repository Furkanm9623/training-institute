import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaUserTie } from "react-icons/fa";

const coursesData = {
  "1": {
    title: "Civil Structure",
    image: "https://arabianinfotech.com/cache/menu/programs/program-preview-1.jpeg",
    overview: "Master structural engineering with advanced tools like STAAD, ETABS, and SAFE.",
    learn: [
      "Structural load analysis",
      "Steel & concrete design",
      "Seismic analysis",
      "Hands-on with STAAD & ETABS"
    ],
    instructor: {
      name: "Jane Smith",
      role: "Senior Structural Engineer",
      bio: "Expert in high-rise and bridge engineering with 12+ years experience."
    }
  },
  "2": {
    title: "Special Engineering Courses",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
    overview: "Learn AutoCAD, Revit, and industrial engineering workflows with real projects.",
    learn: [
      "Advanced AutoCAD 2D/3D",
      "Revit MEP modeling",
      "Industrial workflows",
      "Project-based learning"
    ],
    instructor: {
      name: "Michael Johnson",
      role: "CAD/Revit Specialist",
      bio: "Has trained thousands of engineers in professional CAD & Revit design."
    }
  },
  "3": {
    title: "MEP Design/Engineering",
    image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
    overview: "Gain expertise in HVAC, electrical, and plumbing design with Revit & AutoCAD.",
    learn: [
      "HVAC system design",
      "Electrical distribution",
      "Plumbing & fire safety",
      "Revit & AutoCAD training"
    ],
    instructor: {
      name: "Md Arshad Iqbal",
      role: "Senior MEP Engineer",
      bio: "15+ years in MEP design with high-profile projects worldwide."
    }
  }
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return <h2 className="text-center text-red-500 text-3xl mt-10">Course Not Found</h2>;
  }

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: `url('${course.image}')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-3xl md:text-5xl font-extrabold z-10 px-4">{course.title}</h1>
      </div>
      
      {/* Course Overview */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-blue-500 pl-4">Overview</h2>
        <p className="text-base md:text-lg mt-4 bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">{course.overview}</p>
      </div>

      {/* What You Will Learn */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">What You Will Learn</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course.learn.map((item, index) => (
            <li key={index} className="flex items-center gap-2 p-4 bg-gray-900 shadow-lg rounded-lg text-sm md:text-lg">
              <FaCheckCircle className="text-green-400" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructor Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Instructor</h2>
        <div className="flex flex-col md:flex-row items-center mt-6 bg-gray-800 shadow-lg p-6 md:p-8 rounded-lg">
          <FaUserTie className="text-5xl md:text-6xl text-blue-400 mb-4 md:mb-0" />
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold">{course.instructor.name}</h3>
            <p className="text-gray-300 text-sm md:text-lg">{course.instructor.role}</p>
            <p className="mt-2 text-gray-400 text-sm md:text-base">{course.instructor.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Enrollment Section */}
      <div className="fixed bottom-6 right-6 flex justify-end">
        <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
