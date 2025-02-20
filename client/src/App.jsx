import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Crousel";
import TrainingSection from "./components/TrainingSection";
import CoursesSection from "./components/CourseSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import CourseDetails from "./pages/CourseDetails";
import OurProjects from "./components/OurProjects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <TrainingSection />
              <CoursesSection />
              <WhyChooseUs />
              <OurProjects/>
              <Certifications />
              <Testimonials />
              {/* <ContactUs />
              <Footer /> */}
            </>
          }
        />
        <Route path="/course/:id" element={<CourseDetails />} />
       <Route path="/project-details/:id" element={<ProjectDetails/>}/>
      </Routes>
      <ContactUs />
              <Footer />
    </>
  );
}

export default App;
