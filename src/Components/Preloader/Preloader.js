import React, { useEffect, useState } from "react";
import "./Preloader.css";
// import  preLoaderAnim  from "../../animation";
import { preLoaderAnim } from "../animation";

const Preloader = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    "Hello",
    // "Hola",
    // "Bonjour",
    // "Hallo",
    // "Ciao",
    // "こんにちは",
    // "你好",
    // "Привет",
    // "مرحبا",
    // "안녕하세요",
    // 'السلام عليكم',
  ];

  useEffect(() => {
    preLoaderAnim(document.querySelector(".preloader"));

    const greetingContainer = document.getElementById("greeting");

    const displayNextGreeting = () => {
      greetingContainer.innerHTML = `<p class="fadeIn"> ${greetings[greetingIndex]} </p>`;
      setGreetingIndex((prevIndex) => prevIndex + 1);
    };

    const intervalId = setInterval(() => {
      if (greetingIndex < greetings.length) {
        displayNextGreeting();
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [greetingIndex, greetings.length]);

  return (
    <div className="preloader">
      <div
        id="greeting"
        style={{
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          fontFamily: "champ",
        }}
      ></div>
    </div>
  );
};

export default Preloader;