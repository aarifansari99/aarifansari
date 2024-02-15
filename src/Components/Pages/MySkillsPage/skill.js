import React, { useEffect } from 'react'
import HTML from '../../Assets/Images/Skill Logos/Html.svg'
import jQuery from '../../Assets/Images/Skill Logos/jquery-svgrepo-com.svg'
import JavaScript from '../../Assets/Images/Skill Logos/Js.svg'
import TypeScript from '../../Assets/Images/Skill Logos/Ts.svg'
import ReactJS from '../../Assets/Images/Skill Logos/ReactJs.svg'
import Express from '../../Assets/Images/Skill Logos/express-svgrepo-com.svg'
import Bootstrap from '../../Assets/Images/Skill Logos/bootstrap-fill-svgrepo-com.svg'
import Tailwind from '../../Assets/Images/Skill Logos/tailwind-svgrepo-com.svg'
import NodeJs from '../../Assets/Images/Skill Logos/NodeJs.svg'
import NextJs from '../../Assets/Images/Skill Logos/NextJs.svg'

const SkillPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-skill");
        } else {
          entry.target.classList.remove("show-skill");
        }
      });
    });
    const hiddenElementLeft = document.querySelectorAll(".hidden-skill-left");
    const hiddenElementRight = document.querySelectorAll(".hidden-skill-right");
    hiddenElementLeft.forEach((el) => observer.observe(el));
    hiddenElementRight.forEach((el) => observer.observe(el));
    return () => {
      hiddenElementLeft.forEach((el) => observer.unobserve(el));
      hiddenElementRight.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <>
      <div id="skill" className="skill-container">
        <div className="skill-content">
        <div className="left-skill d-flex flex-column gap-5 hidden-skill-left">
          <div className="skill-1">
          <img src={HTML} alt="" />
          </div>
          <div className="skill-2">
          <img src={jQuery} alt="" />
          </div>
          <div className="skill-3">
          <img src={JavaScript} alt="" />
          </div>
          <div className="skill-4">
          <img src={Bootstrap} alt="" />
          </div>
          <div className="skill-5">
          <img src={Tailwind} alt="" />
          </div>
        </div>
        <div className="skill-title">
          <p className='display-1'>My</p>
          <p className='display-1'>Amazing</p>
          <p className='display-1'>Stack</p>
        </div>
        <div className="right-skill d-flex flex-column gap-5 hidden-skill-right">
        <div className="skill-6">
          <img src={NextJs} alt="" />
          </div>
          <div className="skill-7">
          <img src={ReactJS} alt="" />
          </div>
          <div className="skill-8">
          <img src={Express} alt="" />
          </div>
          <div className="skill-9">
          <img src={NodeJs} alt="" />
          </div>
          <div className="skill-10">
          <img src={TypeScript} alt="" />
          </div>
        
        </div>
        </div>
      </div>
    </>
  )
}

export default SkillPage
