import React from "react";
import "./index.css";
import alemCoffee from "../../images/alem_coffee.jpeg";
import alphaTimber from "../../images/alpha_timber.jpeg";
import summerHouse from "../../images/summer_house.jpeg";
import zuWeddingDecor from "../../images/zu_wedding_decor.jpeg";

function Project() {
  return (
    <div className="project-container" id="projects">
      <div className="project-heading">Projects</div>
      <div className="project-cards-container">
        <div className="project">
          <img src={alemCoffee} alt="" className="project-img" />
          <p className="project-title">Alem Cafe</p>
        </div>
        <div className="project">
          <img src={alphaTimber} alt="" className="project-img" />
          <p className="project-title">Alpha Timber</p>
        </div>
        <div className="project">
          <img src={summerHouse} alt="" className="project-img" />
          <p className="project-title">Summer House</p>
        </div>
        <div className="project">
          <img src={zuWeddingDecor} alt="" className="project-img" />
          <p className="project-title">Zu Wedding Decor</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
