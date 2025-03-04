import React, { useState, useEffect } from "react";
import "./index.css";

import ansible from "../../images/skills/ansible.png";
import api from "../../images/skills/api.png";
import bitbucket from "../../images/skills/bitbucket.png";
import css from "../../images/skills/css.png";
import express from "../../images/skills/express.png";
import github from "../../images/skills/github.png";
import graphQL from "../../images/skills/graphql.png";
import haskell from "../../images/skills/haskell.png";
import html from "../../images/skills/html.png";
import java from "../../images/skills/java.png";
import javascript from "../../images/skills/javascript.png";
import linux from "../../images/skills/linux.png";
import mongoDB from "../../images/skills/mongodb.png";
import mySQL from "../../images/skills/mysql.png";
import nodeJS from "../../images/skills/nodejs.png";
import postgres from "../../images/skills/postgres.png";
import react from "../../images/skills/react.png";
import sql from "../../images/skills/sql.png";
import sqlserver from "../../images/skills/sqlserver.png";
import typescript from "../../images/skills/typescript.png";

const skills_img = [
  ansible,
  api,
  bitbucket,
  css,
  express,
  github,
  graphQL,
  haskell,
  html,
  java,
  javascript,
  linux,
  mongoDB,
  graphQL,
  mySQL,
  nodeJS,
  postgres,
  react,
  sql,
  sqlserver,
  typescript,
  ansible,
  api,
  java,
  javascript,
  linux,
  mongoDB,
  graphQL,
  mySQL,
  nodeJS,
  postgres,
  react,
  sql,
  sqlserver,
  typescript,
  bitbucket,
  css,
  express,
  github,
  graphQL,
  haskell,
  html,
  java,
  javascript,
  linux,
  mongoDB,
  graphQL,
  mySQL,
  nodeJS,
  postgres,
  react,
  sql,
  sqlserver,
  typescript,
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
    <div className="skill-container" id="skills">
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
