import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Project from "./components/project/Project";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Project />
    </>
  );
}

export default App;
