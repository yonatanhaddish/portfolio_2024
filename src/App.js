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
import Footer from "./components/footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div id="outer-container">
      <Navbar />
      <SideNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main id="page-wrap">
        {/* Your existing app content */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Toggle Menu</button>
        <Home />
        <About />
        <Service />
        <Project />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
