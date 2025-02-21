// import React from "react";
// import { FaCheckCircle, FaUserTie } from "react-icons/fa";

// const CourseDetails = () => {
//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div
//         className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg')",
//         }}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold bg-black/60 p-4 rounded-lg">
//           MEP Design Course
//         </h1>
//       </div>

//       {/* Course Overview */}
//       <div className="container mx-auto px-4 py-10">
//         <h2 className="text-3xl font-semibold text-gray-800">Course Overview</h2>
//         <p className="text-lg text-gray-600 mt-4">
//           Learn the fundamentals of MEP (Mechanical, Electrical, and Plumbing) design and engineering from industry experts. This course covers essential concepts, software tools, and real-world applications.
//         </p>
//       </div>

//       {/* What You Will Learn */}
//       <div className="container mx-auto px-4 py-10 bg-gray-100 rounded-lg">
//         <h2 className="text-3xl font-semibold text-gray-800">What You Will Learn</h2>
//         <ul className="mt-4 grid md:grid-cols-2 gap-4 text-lg text-gray-700">
//           <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> HVAC system design and load calculations</li>
//           <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Electrical power distribution and lighting</li>
//           <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Plumbing and fire protection system design</li>
//           <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Revit MEP and AutoCAD training</li>
//         </ul>
//       </div>

//       {/* Instructor Section */}
//       <div className="container mx-auto px-4 py-10">
//         <h2 className="text-3xl font-semibold text-gray-800">Meet Your Instructor</h2>
//         <div className="flex flex-col md:flex-row items-center mt-6 bg-white shadow-lg p-6 rounded-lg">
//           <FaUserTie className="text-6xl text-blue-500 mb-4 md:mb-0" />
//           <div className="md:ml-6">
//             <h3 className="text-2xl font-semibold">John Doe</h3>
//             <p className="text-gray-600">Senior MEP Engineer | 15+ Years Experience</p>
//             <p className="mt-2 text-gray-700">
//               A certified expert in MEP design, John has worked on high-profile projects across the globe and is passionate about teaching the next generation of engineers.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Enrollment Section */}
//       <div className="text-center py-10 bg-blue-600 text-white">
//         <h2 className="text-3xl font-semibold">Enroll Now and Start Learning!</h2>
//         <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition">
//           Join the Course
//         </button>
//       </div>
//     </div>
//   );
// };

import React,{useEffect} from "react";
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
    window.scrollTo(0, 0); // Scroll to the top when component loads
  }, []);
  if (!course) {
    return <h2 className="text-center text-red-500 text-3xl mt-10">Course Not Found</h2>;
  }

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: `url('${course.image}')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-5xl font-extrabold z-10">{course.title}</h1>
      </div>
      
      {/* Course Overview */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-l-4 border-blue-500 pl-4">Overview</h2>
        <p className="text-lg mt-4 bg-gray-800 p-6 rounded-lg shadow-md">{course.overview}</p>
      </div>

      {/* What You Will Learn */}
      <div className="container mx-auto px-6 py-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">What You Will Learn</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.learn.map((item, index) => (
            <li key={index} className="flex items-center gap-2 p-4 bg-gray-900 shadow-lg rounded-lg">
              <FaCheckCircle className="text-green-400" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructor Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold">Instructor</h2>
        <div className="flex flex-col md:flex-row items-center mt-6 bg-gray-800 shadow-lg p-6 rounded-lg">
          <FaUserTie className="text-6xl text-blue-400 mb-4 md:mb-0" />
          <div className="md:ml-6">
            <h3 className="text-2xl font-semibold">{course.instructor.name}</h3>
            <p className="text-gray-300">{course.instructor.role}</p>
            <p className="mt-2 text-gray-400">{course.instructor.bio}</p>
          </div>
        </div>
      </div>
      
      {/* Enrollment Section */}
      <div className="fixed bottom-6 right-6">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;


