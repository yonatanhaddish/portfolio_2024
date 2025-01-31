import React from "react";
import { Link } from "react-scroll";
import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="logo-link"
        >
          <img src="../../images/logo4.png" alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-50}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-50}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} offset={-50}>
              SERVICE
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-50}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-50}>
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
