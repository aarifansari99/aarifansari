import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';

const AboutPage = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.to(".hidden", { opacity: 1, stagger: 1 });
    tl.to(".hidden:not(:last-child)", { opacity: 0.15, stagger: 1 }, 1);

    ScrollTrigger.create({
      animation: tl,
      trigger: "#list",
      start: "top center",
      end: "+=500",
      scrub: 0.1,
    });
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <>
    <div id='about' className="about-container">
        <div className="about-content">
            <div className="who-am">
                <p className='display-1'>Who</p>
                <p className='display-1'>Am</p>
                <p className='display-1'>I</p>
            </div>
            <div className="about-me" id="list">
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

export default AboutPage;
