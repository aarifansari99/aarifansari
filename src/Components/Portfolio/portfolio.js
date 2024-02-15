import React from "react";
import HomePage from "../Pages/HomePage/home";
import AboutPage from "../Pages/AboutPage/about";
import ProjectPage from "../Pages/ProjectsPage/project";
import ContactPage from "../Pages/ContactPage/contact";
import SkillPage from "../Pages/MySkillsPage/skill";
import GreetingLoader from "../Greeting/greet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Portfolio = () => {
  return (
    <>
      {/* <GreetingLoader/> */}
      <Preloader/>
        <div className="Navbar-container">  
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <SkillPage/>
        <ContactPage/>
        </div>
      {/* <div>
        <Routes>
            <Route path="/*" element={<GreetingLoader />}/>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </div> */}
    </>
  );
};

export default Portfolio;
