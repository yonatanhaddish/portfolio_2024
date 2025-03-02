import React, { useState, useEffect } from "react";
import "./index.css";

function About() {
  const [currentSelectedImage, setCurrentSelectedImage] = useState("image001");

  useEffect(() => {
    const listImages = ["image001", "image002", "image003"];
    const interval = setInterval(() => {
      let selectedRandomImage =
        listImages[Math.floor(Math.random() * listImages.length)];
      setCurrentSelectedImage(selectedRandomImage);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container" id="about">
      <div className={`about-${currentSelectedImage}`}></div>
      <div className="about-description">
        <div className="about-desc">
          <h3>
            With a strong foundation in Applied Mathematics and a certificate in
            Full Stack Development, my career as a Software Developer is fueled
            by a passion for coding and problem-solving.
          </h3>
        </div>
        <div className="about-desc">
          <h3>
            I am skilled in leveraging technologies like JavaScript, React,
            Node.js, SQL, NoSQL, Java, Ansible, DAST scanning, and vulnerability
            assessments based on OWASP principles to build secure, scalable
            solutions.
          </h3>
        </div>
        <div className="about-desc">
          <h3>
            I am eager to contribute my skills and experience to innovative
            projects that push the boundaries of technology and create impact
            solutions.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
