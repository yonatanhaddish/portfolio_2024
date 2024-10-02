import React, { useState, useEffect } from "react";
import "./index.css";
import alemCoffee from "../../images/alem_coffee.jpeg";
import alphaTimber from "../../images/alpha_timber.jpeg";
import summerHouse from "../../images/summer_house.jpeg";
import zuWeddingDecor from "../../images/zu_wedding_decor.jpeg";

const skills_img = [
  alemCoffee,
  alphaTimber,
  summerHouse,
  zuWeddingDecor,
  alemCoffee,
  alphaTimber,
  summerHouse,
  zuWeddingDecor,
];

function Skill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = skills_img.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  const visibleImages = 5; // Number of images to show at once
  const translateX = `-${(currentIndex % totalImages) * (100 / visibleImages)}%`;

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          width: `${(totalImages / visibleImages) * 100}%`,
          transform: `translateX(${translateX})`,
        }}
      >
        {skills_img.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{ flex: `0 0 ${100 / visibleImages}%` }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* <div className="indicators">
        {skills_img.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Skill;
