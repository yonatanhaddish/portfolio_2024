import React, { useState, useEffect } from "react";
import { Link, animateScroll as scrollTo } from "react-scroll";
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
  useEffect(() => {
    scrollTo.scrollToTop();
  }, []);
  return (
    <>
      <Navbar />
      <SideNavbar pageWrapId="page-wrap" outerContainerId={"outer-container"} />
      <Home />
      <About />
      <Service />
      <Project />
      <Skill />
      <Experience />
      <Contact />
      <Footer />
      {/* <BoxOne /> */}
      {/* <BoxTwo /> */}
    </>
  );
}

export default App;
