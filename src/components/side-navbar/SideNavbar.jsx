import React from "react";
import { push as Menu } from "react-burger-menu";
import "./index-sidebar.css";

const SideNavbar = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/services">
        Services
      </a>
    </Menu>
  );
};

export default SideNavbar;
