import React from "react";
import MyLogo from "../Assets/Images/MyLogo/aarif-ansari-high-resolution-logo-transparent.png";
import LinkDin from '../Assets/Images/Socials/Linkdin.svg'
import Git from '../Assets/Images/Socials/Github.svg'
import Twitter from '../Assets/Images/Socials/Twiter.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="my-logo">
            <img src={MyLogo} alt="" />
          </div>
          <div className="navbar-content">
                <nav>
                    <ul>
                    {/* <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Me</Link></li>
                    <li><Link to={'/project'}>Projects</Link></li>
                    <li><Link to={'/skills'}>My Stack</Link></li>
                    <li><Link to={'/contact'}>Lets Talk</Link></li> */}
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#skill">My Stack</a></li>
                        <li><a href="#contact">Lets Talk</a></li>
                    </ul>
                </nav>
            </div>
          <div className="social-handles flex-column position-absolute">
            <a href="#">
                <img src={LinkDin} alt="" />
            </a>
            <a href="#">
            <img src={Git} alt="" />
            </a>
            <a href="#">
            <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
