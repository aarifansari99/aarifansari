import React, { useEffect, useState } from "react";
import Header from "../../Header/header";
import LinkDin from "../../Assets/Images/Socials/Linkdin.svg";
import Git from "../../Assets/Images/Socials/Github.svg";
import Twitter from "../../Assets/Images/Socials/Twiter.svg";
// import Confetti from "react-confetti";

const HomePage = () => {
  // const [showConfetti, setShowConfetti] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowConfetti(true);
  //   }, 3000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      {/* {showConfetti && <Confetti recycle={false} style={{width: '100%'}} />} */}
      <div className="header-container">
        <Header />
      </div>

      <div className="home-container">
        <div className="home-content gap-4 d-flex align-items-center justify-content-center h-100">
          <div className="my-profession">
            <p>Fullstack Developer</p>
            <p>Mumbai,India</p>
            <div className="social-handle">
              <a href="https://www.linkedin.com/in/aarif-ansari-714457246/">
                <img src={LinkDin} alt="" />
              </a>
              <a href="https://github.com/aarifansari99" className="px-2">
                <img src={Git} alt="" />
              </a>
              <a href="https://twitter.com/aarif_anis_09">
                <img src={Twitter} alt="" />
              </a>
            </div>
          </div>
          <div className="my-name">
            <p className="display-1">Aarif</p>
            <p className="display-1">Anis</p>
            <p className="display-1">Ansari</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
