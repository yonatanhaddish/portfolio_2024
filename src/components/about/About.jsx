import React from "react";
import "./index.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-detail">
        <div className="about-title">
          <p className="about-name">
            <span className="txt-hello">Hello,</span>
            <br />I am
            <span className="about-name-span"> Yonatan Haddish</span>
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
