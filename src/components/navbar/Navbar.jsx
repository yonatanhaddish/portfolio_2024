import React from "react";
import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/" className="a"></a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">SERVICE</a>
          </li>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">EXPERIENCE</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
