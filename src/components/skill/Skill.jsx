import React, { useState, useEffect } from "react";
import "./index.css";

import ansible from "../../images/ansible.png";
import github from "../../images/github.png";
import haskell from "../../images/haskell.png";
import html from "../../images/html-5.png";
import java from "../../images/java.png";
import linux from "../../images/linux.png";
import mongodb from "../../images/mongodb.png";
import mysql from "../../images/mysql.png";
import postgres from "../../images/postgres.png";
import react from "../../images/react.png";
import sqlserver from "../../images/sqlserver.png";
import typescript from "../../images/typescript.png";
import javascript from "../../images/javascript.png";

const skills_img = [
  ansible,
  github,
  haskell,
  html,
  java,
  linux,
  mongodb,
  mysql,
  postgres,
  react,
  sqlserver,
  typescript,
  javascript,
  ansible,
  github,
  haskell,
  html,
  java,
  linux,
  mongodb,
  mysql,
  postgres,
  react,
  sqlserver,
  typescript,
  javascript,
  ansible,
  github,
  haskell,
  html,
  java,
  linux,
  mongodb,
  mysql,
  postgres,
  react,
  sqlserver,
  typescript,
  javascript,
  ansible,
  github,
  haskell,
  html,
  java,
  linux,
  mongodb,
  mysql,
  postgres,
  react,
  sqlserver,
  typescript,
  javascript,
];

function Skill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = skills_img.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  const visibleImages = 18; // Number of images to show at once
  const translateX = `-${(currentIndex % totalImages) * (100 / visibleImages)}%`;

  return (
    <div className="skill-container">
      <div
        className="skill-list"
        style={{
          width: `${(totalImages / visibleImages) * 100}%`,
          transform: `translateX(${translateX})`,
        }}
      >
        {skills_img.map((image, index) => (
          <div
            key={index}
            className="skill-img"
            style={{ flex: `0 0 ${100 / visibleImages}%` }}
          >
            <img src={image} alt={`Slide ${index}`} className="img-skills" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
