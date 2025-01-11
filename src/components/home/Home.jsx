import React from "react";
// import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-detail">
        <div className="home-title">
          <p className="home-name">
            <span className="txt-hello">Hello,</span>
            <br />I am
            <span className="home-name-span"> Yonatan Haddish</span>
          </p>
          <p className="home-sub">A Full Stack Developer</p>
        </div>
        <div className="home-buttons">
          <button>View Projects</button>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="home-img"></div>
    </div>
  );
}

export default Home;
