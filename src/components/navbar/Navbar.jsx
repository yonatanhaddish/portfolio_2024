import React, { useState } from "react";
import { Link } from "react-scroll";
import "./index.css";

function Navbar() {
  const [selected, setSelected] = useState("home");

  function handleClick(id) {
    setSelected(id);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-50}
          className="logo-link"
        ></Link>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("home")}
              id={selected === "home" ? "active" : ""}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("about")}
              id={selected === "about" ? "active" : ""}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("services")}
              id={selected === "services" ? "active" : ""}
            >
              SERVICE
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("projects")}
              id={selected === "projects" ? "active" : ""}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("skills")}
              id={selected === "skills" ? "active" : ""}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("experience")}
              id={selected === "experience" ? "active" : ""}
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="link"
              onClick={() => handleClick("contact")}
              id={selected === "contact" ? "active" : ""}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
