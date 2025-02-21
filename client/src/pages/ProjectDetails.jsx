// import React from "react";
// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

// const projects = [
//   {
//     id: 1,
//     title: "HVAC System Design",
//     description: "Optimizing HVAC efficiency for modern commercial buildings.",
//     features: [
//       { id: 1, title: "Energy Efficiency", desc: "Reduces power consumption by up to 30%", color: "bg-blue-500" },
//       { id: 2, title: "Advanced Control Systems", desc: "Automated temperature & humidity control", color: "bg-green-500" },
//       { id: 3, title: "Sustainable Materials", desc: "Eco-friendly components for sustainability", color: "bg-purple-500" },
//       { id: 4, title: "Smart Sensors", desc: "Real-time monitoring & alerts", color: "bg-red-500" },
//       { id: 5, title: "Heat Recovery Systems", desc: "Maximizes energy reuse", color: "bg-yellow-500" },
//       { id: 6, title: "Low Maintenance", desc: "Designed for long-term cost savings", color: "bg-teal-500" },
//     ],
//     images: [
//       "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
//       "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
//       "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
//       "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
//       "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
//       "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
//     ],
//     overview: "This HVAC system was implemented in a commercial building with a capacity of 500+ occupants. The design incorporated variable refrigerant flow (VRF) systems, automated air handling units, and heat recovery ventilators.",
//     steps: [
//       "Initial site survey and heat load calculations",
//       "Selection of energy-efficient HVAC units",
//       "Integration of smart sensors for real-time monitoring",
//       "Installation and testing of air distribution systems",
//       "Post-installation maintenance and efficiency analysis",
//     ],
//   },
//   {
//     id: 2,
//     title: "Plumbing Network Optimization",
//     description: "Enhancing plumbing efficiency with advanced water distribution techniques.",
//     features: [
//       { id: 1, title: "Water Conservation", desc: "Reduces water wastage with smart flow control", color: "bg-blue-400" },
//       { id: 2, title: "Leak Detection", desc: "Real-time monitoring for leak prevention", color: "bg-red-600" },
//       { id: 3, title: "High-Efficiency Pumps", desc: "Improves water pressure while saving energy", color: "bg-green-500" },
//     ],
//     images: [
//       "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
//       "https://images.pexels.com/photos/416529/pexels-photo-416529.jpeg",
//       "https://images.pexels.com/photos/416530/pexels-photo-416530.jpeg",
//     ],
//     overview: "A comprehensive plumbing network optimization project focused on reducing water consumption, detecting leaks early, and improving overall efficiency.",
//     steps: [
//       "Survey of existing plumbing infrastructure",
//       "Implementation of water-efficient fixtures",
//       "Installation of smart leak detection systems",
//       "Optimization of water pressure using high-efficiency pumps",
//       "Final assessment and system integration",
//     ],
//   },
//   {
//     id: 3,
//     title: "Fire Protection System",
//     description: "Implementing advanced fire protection mechanisms to enhance safety and compliance.",
//     features: [
//       { id: 1, title: "Automatic Sprinklers", desc: "Quick response to fire incidents", color: "bg-orange-500" },
//       { id: 2, title: "Smoke Detection", desc: "Early warning system with real-time alerts", color: "bg-gray-600" },
//       { id: 3, title: "Fire Suppression", desc: "Uses modern suppression technologies", color: "bg-red-700" },
//     ],
//     images: [
//       "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg",
//       "https://images.pexels.com/photos/237208/pexels-photo-237208.jpeg",
//       "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
//     ],
//     overview: "This project focuses on designing and implementing fire protection systems in large-scale buildings, including automated fire detection, suppression, and evacuation strategies.",
//     steps: [
//       "Conducting fire risk assessment",
//       "Installation of automated sprinklers",
//       "Integration of smoke detection systems",
//       "Implementation of fire suppression measures",
//       "Testing and compliance verification",
//     ],
//   },
//   {
//     id: 4,
//     title: "Electrical Load Distribution",
//     description: "Optimizing electrical load distribution for better efficiency and safety.",
//     features: [
//       { id: 1, title: "Load Balancing", desc: "Even distribution of electrical loads", color: "bg-indigo-500" },
//       { id: 2, title: "Smart Circuit Protection", desc: "Automated circuit breakers for safety", color: "bg-red-700" },
//       { id: 3, title: "Energy Monitoring", desc: "Real-time tracking of power usage", color: "bg-green-600" },
//     ],
//     images: [
//       "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
//       "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg",
//       "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg",
//     ],
//     overview: "An advanced electrical distribution system that ensures optimal power distribution while maintaining efficiency and safety.",
//     steps: [
//       "Assessment of power demand and supply",
//       "Designing and implementing load balancing solutions",
//       "Installation of smart circuit breakers",
//       "Testing and calibration of energy monitoring systems",
//       "Final optimization and safety checks",
//     ],
//   }

// ];

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === parseInt(id));
  
//   if (!project) {
//     return <div className="text-center text-red-500 text-2xl">Project not found</div>;
//   }

//   return (
    
//     <div className="bg-gray-100 min-h-screen">
//       <section
//         className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center text-center"
//         style={{ backgroundImage: `url(${project.images[0]})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <motion.div
//           className="relative z-10 max-w-4xl text-white"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl font-extrabold">{project.title}</h1>
//           <p className="mt-4 text-lg text-gray-300">{project.description}</p>
//         </motion.div>
//       </section>
//       <section className="py-12 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Key Features</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {project.features.map((feature) => (
//             <motion.div key={feature.id} className={`p-6 rounded-lg shadow-md text-center text-white ${feature.color}`} whileHover={{ scale: 1.05 }}>
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="mt-2">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
      
//       <section className="py-12 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
//         <p className="text-lg text-gray-600 leading-relaxed">{project.overview}</p>
//         <h3 className="text-2xl font-semibold text-gray-800 mt-6">Implementation Steps</h3>
//         <ul className="list-disc list-inside text-gray-600 mt-3">
//           {project.steps.map((step, index) => (
//             <li key={index}>{step}</li>
//           ))}
//         </ul>
//       </section>
//       <section className="py-12 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Project Gallery</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {project.images.map((image, index) => (
//             <motion.img
//               key={index}
//               src={image}
//               alt="Project Image"
//               className="rounded-lg shadow-lg w-full h-64 object-cover"
//               whileHover={{ scale: 1.05 }}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProjectDetails;


import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HVAC System Design",
    description: "Optimizing HVAC efficiency for modern commercial buildings.",
    features: [
      { id: 1, title: "Energy Efficiency", desc: "Reduces power consumption by up to 30%", color: "bg-blue-500" },
      { id: 2, title: "Advanced Control Systems", desc: "Automated temperature & humidity control", color: "bg-green-500" },
      { id: 3, title: "Sustainable Materials", desc: "Eco-friendly components for sustainability", color: "bg-purple-500" },
      { id: 4, title: "Smart Sensors", desc: "Real-time monitoring & alerts", color: "bg-red-500" },
      { id: 5, title: "Heat Recovery Systems", desc: "Maximizes energy reuse", color: "bg-yellow-500" },
      { id: 6, title: "Low Maintenance", desc: "Designed for long-term cost savings", color: "bg-teal-500" },
    ],
    images: [
      "https://remars.co.uk/wp-content/uploads/2018/08/MEP-1-800x600.jpg",
      "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
      "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
      "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
      "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
      "https://eastrandfire.co.za/wp-content/uploads/2023/09/transformer-fire-protection-header.jpg",
    ],
    overview: "This HVAC system was implemented in a commercial building with a capacity of 500+ occupants. The design incorporated variable refrigerant flow (VRF) systems, automated air handling units, and heat recovery ventilators.",
    steps: [
      "Initial site survey and heat load calculations",
      "Selection of energy-efficient HVAC units",
      "Integration of smart sensors for real-time monitoring",
      "Installation and testing of air distribution systems",
      "Post-installation maintenance and efficiency analysis",
    ],
  },
  {
    id: 2,
    title: "Plumbing Network Optimization",
    description: "Enhancing plumbing efficiency with advanced water distribution techniques.",
    features: [
      { id: 1, title: "Water Conservation", desc: "Reduces water wastage with smart flow control", color: "bg-blue-400" },
      { id: 2, title: "Leak Detection", desc: "Real-time monitoring for leak prevention", color: "bg-red-600" },
      { id: 3, title: "High-Efficiency Pumps", desc: "Improves water pressure while saving energy", color: "bg-green-500" },
    ],
    images: [
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      "https://images.pexels.com/photos/416529/pexels-photo-416529.jpeg",
      "https://images.pexels.com/photos/416530/pexels-photo-416530.jpeg",
    ],
    overview: "A comprehensive plumbing network optimization project focused on reducing water consumption, detecting leaks early, and improving overall efficiency.",
    steps: [
      "Survey of existing plumbing infrastructure",
      "Implementation of water-efficient fixtures",
      "Installation of smart leak detection systems",
      "Optimization of water pressure using high-efficiency pumps",
      "Final assessment and system integration",
    ],
  },
  {
    id: 3,
    title: "Fire Protection System",
    description: "Implementing advanced fire protection mechanisms to enhance safety and compliance.",
    features: [
      { id: 1, title: "Automatic Sprinklers", desc: "Quick response to fire incidents", color: "bg-orange-500" },
      { id: 2, title: "Smoke Detection", desc: "Early warning system with real-time alerts", color: "bg-gray-600" },
      { id: 3, title: "Fire Suppression", desc: "Uses modern suppression technologies", color: "bg-red-700" },
    ],
    images: [
      "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg",
      "https://images.pexels.com/photos/237208/pexels-photo-237208.jpeg",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    ],
    overview: "This project focuses on designing and implementing fire protection systems in large-scale buildings, including automated fire detection, suppression, and evacuation strategies.",
    steps: [
      "Conducting fire risk assessment",
      "Installation of automated sprinklers",
      "Integration of smoke detection systems",
      "Implementation of fire suppression measures",
      "Testing and compliance verification",
    ],
  },
  {
    id: 4,
    title: "Electrical Load Distribution",
    description: "Optimizing electrical load distribution for better efficiency and safety.",
    features: [
      { id: 1, title: "Load Balancing", desc: "Even distribution of electrical loads", color: "bg-indigo-500" },
      { id: 2, title: "Smart Circuit Protection", desc: "Automated circuit breakers for safety", color: "bg-red-700" },
      { id: 3, title: "Energy Monitoring", desc: "Real-time tracking of power usage", color: "bg-green-600" },
    ],
    images: [
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg",
      "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg",
    ],
    overview: "An advanced electrical distribution system that ensures optimal power distribution while maintaining efficiency and safety.",
    steps: [
      "Assessment of power demand and supply",
      "Designing and implementing load balancing solutions",
      "Installation of smart circuit breakers",
      "Testing and calibration of energy monitoring systems",
      "Final optimization and safety checks",
    ],
  }

];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when component loads
    }, []);
  if (!project) {
    return <div className="text-center text-red-500 text-2xl">Project not found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white">
      <section
        className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-4xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold text-white">{project.title}</h1>
          <p className="mt-4 text-lg text-gray-200">{project.description}</p>
        </motion.div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.features.map((feature) => (
            <motion.div key={feature.id} className={`p-6 rounded-lg shadow-md text-center text-white ${feature.color}`} whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
        <h3 className="text-2xl font-semibold text-white mt-6">Implementation Steps</h3>
        <ul className="list-disc list-inside text-gray-300 mt-3">
          {project.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Project Image"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
