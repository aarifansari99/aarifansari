import React, { useEffect } from 'react'

const AboutPage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    // const hiddenElementLeft = document.querySelectorAll(".hidden-skill-left");
    const hiddenElementRight = document.querySelectorAll(".hidden");
    // hiddenElementLeft.forEach((el) => observer.observe(el));
    hiddenElementRight.forEach((el) => observer.observe(el));
    return () => {
      // hiddenElementLeft.forEach((el) => observer.unobserve(el));
      hiddenElementRight.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
    <div id='about' className="about-container">
        <div className="about-content">
            <div className="who-am">
                <p className='display-1'>Who</p>
                <p className='display-1'>Am</p>
                <p className='display-1'>I</p>
            </div>
            <div className="about-me">
                <p className='hidden'>Hey!</p>
                <span className='hidden'>.</span>
                <p className='hidden'>I am Aarif</p>
                <span className='hidden'>.</span>
                <p className='hidden'>A creative FULLSTACK DEVELOPER focuing on React.JS</p>
                <span className='hidden'>.</span>
                <p className='hidden'>I have been working with web technologies for 2 years</p>
                <span className='hidden'>.</span>
                <p className='hidden'>During this period, I gained hands-on experience with developing full-stack web applications</p>
                <span className='hidden'>.</span>
                <p className='hidden'>Providing Frontend Development services at Cisfood Digiverse, I collaborate remotely with a team of awesome people from different corners of the world</p>
                <span className='hidden'>.</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage
