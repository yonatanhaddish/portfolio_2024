import React from "react";
import { Link } from "react-scroll";
import "./index.css";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-detail">
        <div className="home-title">
          <p className="home-name">
            <span className="txt-hello">Hello,</span>
            <br />I am
            <span className="home-name-span"> Yonatan Haddish</span>
          </p>
          <p className="home-sub">A Full Stack Developer</p>
        </div>
        <div className="home-buttons">
          <button className="button-home">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="button-link"
            >
              View Projects
            </Link>
          </button>
          <button className="button-home">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="button-link"
            >
              Hire Me
            </Link>
          </button>
        </div>
      </div>
      <div className="home-img"></div>
    </div>
  );
}

export default Home;
