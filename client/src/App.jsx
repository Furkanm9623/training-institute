import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUs from "./components/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/training-institute" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
