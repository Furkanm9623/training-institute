import React from "react";
import Carousel from "../components/Crousel";
import TrainingSection from "../components/TrainingSection";
import CoursesSection from "../components/CourseSection";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProjects from "../components/OurProjects";
import Certifications from "../components/Certification";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Carousel />
      <TrainingSection />
      <CoursesSection />
      <WhyChooseUs />
      <OurProjects />
      <Certifications />
      <Testimonials />
    </>
  );
};

export default Home;
