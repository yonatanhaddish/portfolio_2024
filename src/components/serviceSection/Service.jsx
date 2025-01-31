import React from "react";
import "./index.css";

function Service() {
  return (
    <div className="service-container" id="services">
      <div className="service-heading">What I do</div>
      <div className="service-cards">
        <div className="service-webapp services">
          <h4>Web Application Development</h4>
          <p>
            Offering end-to-end full stack web application development, from
            building responsive front-end user interface to robust back-end
            systems with secure APIs and database.
          </p>
        </div>
        <div className="service-photo services">
          <h4>Photography</h4>
          <p>
            I specialize in small event photography, capturing meaningful
            moments and genuine emotions from family gatherings to intimate
            celebrations. My goal is to preserve the essence of your event in
            every shot.
          </p>
        </div>
        <div className="service-tutor services">
          <h4>Coding Tutoring</h4>
          <p>
            Provide an expert tutoring on project based MERN stack application
            that help you master the essential tools for building scalable and
            efficient web application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
