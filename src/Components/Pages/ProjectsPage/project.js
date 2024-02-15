import React from "react";
import CRISS from "../../Assets/Images/ProjectsImages/digiverse.png";

const ProjectPage = () => {
  const Projects = [
    {
      title: "CRISFOOD DIGIVERSE",
      image: require("../../Assets/Images/ProjectsImages/digiverse.png"),
      subtitle: "Front-End Developer",
      location: "Mumbai",
      link: "https://www.crisfooddigiverse.com/",
    },
    {
      title: "GLORY SCHOOL",
      image: require("../../Assets/Images/ProjectsImages/glory.png"),
      subtitle: "Associate Web Developer",
      location: "Mumbai",
      link: "http://www.gloryenglishschool.com/",
    },
    {
      title: "BHAIJAAN DHABA",
      image: require("../../Assets/Images/ProjectsImages/bhaijan.png"),
      subtitle: "Associate Web Developer",
      location: "Remote",
      link: "https://www.bhaijaandhaba.in/",
    },
    {
      title: "MD.ALI DHABA",
      image: require("../../Assets/Images/ProjectsImages/mhdali.png"),
      subtitle: "Associate Web Developer",
      location: "Mumbai",
      link: "https://mdalidhaba.in/",
    },
    {
      title: "SILVER FORK MADINA",
      image: require("../../Assets/Images/ProjectsImages/silverfork.png"),
      subtitle: "(Freelance) Web Developer",
      location: "Remote",
      link: "ilverforkmadina.com/home/index.html",
    },
  ];

  return (
    <>
      <div id="project" className="project-container">
        <div className="header-project d-flex align-items-center justify-content-center w-100">
          <div className="scroll">
            <ul>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
            </ul>
            <ul>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
        <div className="projects-part">
          <div className="works w-100">
            {Projects.map((data, index) => {
              return (
                <div className="project">
                  <div className="crisfood-digi p-3">
                    <p className="display-6">{data.title}</p>
                    <div className="disc-loc">
                      <span>{data.subtitle}</span>
                      <span>---{data.location}</span>
                    </div>
                    <div className="img-div">
                      <a href={data.link}>
                        <img src={data.image} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="work-head">
            <p className="display-1">What</p>
            <p className="display-1">I had</p>
            <p className="display-1">Done</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
