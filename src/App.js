import React from "react";
import { Link } from "react-scroll";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/serviceSection/Service";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import SideNavbar from "./components/side-navbar/SideNavbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SideNavbar pageWrapId="page-wrap" outerContainerId={"outer-container"} />
      <div id="home">
        {" "}
        <Home />
      </div>
      <div id="about">
        {" "}
        <About />
      </div>
      <div id="services">
        {" "}
        <Service />
      </div>
      <div id="projects">
        {" "}
        <Project />
      </div>
      <div id="skills">
        {" "}
        <Skill />
      </div>
      <div id="experience">
        {" "}
        <Experience />
      </div>
      <div id="contact">
        {" "}
        <Contact />
      </div>
      <Footer />
      {/* <BoxOne /> */}
      {/* <BoxTwo /> */}
    </>
  );
}

export default App;
