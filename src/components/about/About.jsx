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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container" id="about">
      <div className={`about-${currentSelectedImage}`}></div>
      <div className="about-description">
        <div className="about-desc">
          <h3>
            With a robust foundation in Applied Mathematics and a certificate in
            Full Stack Development, my career journey as a Software Developer
            has been fuled by a passion for coding and problem-solving.
            Meticulously leveraging skills in Ansible, React, NodeJs, Express,
            SQL and NoSQL Databases.
          </h3>
        </div>
        <div className="about-desc">
          <h3>
            I am eager to contribute my skills and experience to innovative
            projects that push the boundaries of technology and create impact
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
