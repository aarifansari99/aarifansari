import React, { useEffect, useState } from 'react';

const GreetingLoader = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    'Hello',
    // 'Hola',
    // 'Bonjour',
    // 'Hallo',
    // 'Ciao',
    // 'こんにちは',
    // '你好',
    // 'Привет',
    // 'مرحبا',
    // '안녕하세요',
    // 'السلام عليكم'
  ];

  useEffect(() => {
    const greetingContainer = document.getElementById('greeting');

    const displayNextGreeting = () => {
      greetingContainer.innerHTML = `<p class="fadeIn">${greetings[greetingIndex]}</p>`;
      setGreetingIndex((prevIndex) => prevIndex + 1);
    };

    const intervalId = setInterval(() => {
      if (greetingIndex < greetings.length) {
        displayNextGreeting();
      } 
    }, 100); // 1000 milliseconds = 1 second between greetings

    return () => {
      clearInterval(intervalId);
    };
  }, [greetingIndex, greetings.length]);

  return (
    <div
      id="greeting"
      style={{
        // display: 'none',
        height: "100vh",
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
      }}
    ></div>
  );
};

export default GreetingLoader;
