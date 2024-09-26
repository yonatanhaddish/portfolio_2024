import React from "react";
import "./index.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-detail">
        <div className="about-title">
          <p className="about-name">
            Hello,
            <br />
            <span className="about-name-span">I am Yonatan Haddish</span>
          </p>
          <p className="about-sub">A Full Stack Developer</p>
        </div>
        <div className="about-buttons">
          <button>View Projects</button>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="about-img"></div>
    </div>
  );
}

export default About;
