import React, { useState } from "react";
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
    <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
      <FontAwesomeIcon icon={faX} className="close-icon" onClick={closeMenu} />
      <a className="menu-item" href="/" onClick={closeMenu}>
        HOME
      </a>
      <a className="menu-item" href="/about" onClick={closeMenu}>
        ABOUT
      </a>
      <a className="menu-item" href="/services" onClick={closeMenu}>
        SERVICE
      </a>
      <a className="menu-item" href="/" onClick={closeMenu}>
        PROJECTS
      </a>
      <a className="menu-item" href="/about" onClick={closeMenu}>
        EXPERIENCE
      </a>
      <a className="menu-item" href="/services" onClick={closeMenu}>
        CONTACT
      </a>
    </Menu>
  );
};

export default SideNavbar;
