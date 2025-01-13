import React from "react";
import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./index-sidebar.css";

const SideNavbar = () => {
  return (
    <Menu right>
      <FontAwesomeIcon icon={faX} className="close-icon" />
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/about">
        ABOUT
      </a>
      <a className="menu-item" href="/services">
        SERVICE
      </a>
      <a className="menu-item" href="/">
        PROJECTS
      </a>
      <a className="menu-item" href="/about">
        EXPERIENCE
      </a>
      <a className="menu-item" href="/services">
        CONTACT
      </a>
    </Menu>
  );
};

export default SideNavbar;
