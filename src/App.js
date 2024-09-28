import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Service from "./components/service/Service";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
    </>
  );
}

export default App;
