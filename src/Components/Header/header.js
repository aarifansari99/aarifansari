import React from "react";
import MyLogo from "../Assets/Images/MyLogo/NameLogo.png";
import LinkDin from "../Assets/Images/Socials/Linkdin.svg";
import Git from "../Assets/Images/Socials/Github.svg";
import Twitter from "../Assets/Images/Socials/Twiter.svg";
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
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#skill">My Stack</a>
                </li>
                <li>
                  <a href="#contact">Lets Talk</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social-handles flex-column position-absolute">
            <a href="https://www.linkedin.com/in/aarif-ansari-714457246/">
              <img src={LinkDin} alt="" />
            </a>
            <a href="https://github.com/aarifansari99">
              <img src={Git} alt="" />
            </a>
            <a href="https://twitter.com/aarif_anis_09">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
