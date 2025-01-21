import React from "react";
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
import BoxOne from "./components/BoxOne/BoxOne";
import BoxTwo from "./components/BoxTwo/BoxTwo";

function App() {
  return (
    <>
      <Navbar />
      <SideNavbar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <Home />
      <About />
      <Service />
      {/* <Project /> */}
      {/* <Skill /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      {/* <BoxOne /> */}
      {/* <BoxTwo /> */}
    </>
  );
}

export default App;
