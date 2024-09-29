import React from "react";
import "./index.css";

function Service() {
  return (
    <div className="service-container">
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
            Specializing in small event photography, from family gatherings to
            intimate celebrations, I focus on preserving every significant
            moment. Whether it’s shared laughter, heartfelt speeches, or quite,
            personal interactions, I am committed to capturing the genuine
            emotions that make your event truly unique.
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
