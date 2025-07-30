import React, { useState } from 'react';
// import './Home.css'; 
import profilePic from '../assets/pexels-thisisengineering-3861961.jpg';

function Home() {
   const [buttonText, setButtonText] = useState("Download Resume ⬇️");

  const handleDownload = () => {
    setButtonText("Downloading ✅");
    const link = document.createElement('a');
    link.href = '/P_ANKITHA_Resume.pdf'; 
    link.download = 'P_ANKITHA_Resume.pdf';
    link.click();

    setTimeout(() => {
      setButtonText("Download Resume ⬇️");
    }, 1000);
  };
  return (
    <section className="home-section" id="home">
      <div className="home-wrapper">
        <img src={profilePic} alt="Profile" className="profile-image" />
          <div className="home-content">
        <h2>Hello, I'm Ankitha</h2>
        <h3>Frontend Developer</h3>
        <p>I create modern, responsive web interfaces using React, HTML, CSS, and JavaScript. Welcome to my portfolio!</p>
        <button onClick={handleDownload} className="download-btn">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
