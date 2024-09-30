import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
    </>
  );
}

export default App;
