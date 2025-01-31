import React, { useState } from "react";
import { Link } from "react-scroll";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./index-sidebar.css";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      right
      isOpen={isOpen}
      onStateChange={handleStateChange}
      pageWrapId="page-wrap"
    >
      <FontAwesomeIcon icon={faX} className="close-icon" onClick={closeMenu} />
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        HOME
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        ABOUT
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        SERVICE
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        PROJECTS
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        SKILLS
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        EXPERIENCE
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="menu-item"
        onClick={closeMenu}
      >
        CONTACT
      </Link>
    </Menu>
  );
};

export default SideNavbar;
