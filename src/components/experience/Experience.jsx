import React, { useState } from "react";
import "./index.css";

const Experience = () => {
  const [selected, setSelected] = useState("");
  const [selectedTest, setSelectedTest] = useState(false);

  const handleSelect = (event) => {
    const selectedId = event.currentTarget.getAttribute("id");
    setSelected(selectedId);
    // console.log("Selected ID:", selectedId);
    // console.log(`class-filler-${selectedId}`);
  };

  const experiences = [
    {
      id: "01",
      title:
        "Associate Software Engineer | TD Bank | December 2023 - July 2024",
      details: [
        "Collaborated in the development of a dynamic web application using Angular for the front-end and NodeJs with MSSQL for the back-end, resulting in a highly responsive and user-friendly interface.",
        "Collaborated in the development of a dynamic web application using React for the front end and resulting in a highly responsive and user-friendly interface.",
        "Collaborated with cross-functional teams to deploy a NodeJs application into Azure clouds.",
      ],
    },
    {
      id: "02",
      title:
        "Associate Software Engineer | TD Bank | December 2023 - July 2024",
      details: [
        "Collaborated in the development of a dynamic web application using Angular for the front-end and NodeJs with MSSQL for the back-end, resulting in a highly responsive and user-friendly interface.",
        "Collaborated in the development of a dynamic web application using React for the front end and resulting in a highly responsive and user-friendly interface.",
        "Collaborated with cross-functional teams to deploy a NodeJs application into Azure clouds.",
      ],
    },
    {
      id: "03",
      title:
        "Associate Software Engineer | TD Bank | December 2023 - July 2024",
      details: [
        "Collaborated in the development of a dynamic web application using Angular for the front-end and NodeJs with MSSQL for the back-end, resulting in a highly responsive and user-friendly interface.",
        "Collaborated in the development of a dynamic web application using React for the front end and resulting in a highly responsive and user-friendly interface.",
        "Collaborated with cross-functional teams to deploy a NodeJs application into Azure clouds.",
      ],
    },
    {
      id: "04",
      title:
        "Associate Software Engineer | TD Bank | December 2023 - July 2024",
      details: [
        "Collaborated in the development of a dynamic web application using Angular for the front-end and NodeJs with MSSQL for the back-end, resulting in a highly responsive and user-friendly interface.",
        "Collaborated in the development of a dynamic web application using React for the front end and resulting in a highly responsive and user-friendly interface.",
        "Collaborated with cross-functional teams to deploy a NodeJs application into Azure clouds.",
      ],
    },
  ];

  return (
    <div className="experience-container">
      <div className="color-filler"></div>
      <div className="experience-subcontainer">
        <div className="experience-heading">Experience</div>
        <div className="experience-body">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`experience-class ${selected === experience.id ? "selected" : ""}`}
              onClick={handleSelect}
              id={experience.id}
            >
              <div
                id="filler-class"
                className={`class-filler-${selected}`}
              ></div>
              <div className="experience-class-body">
                <p className="experience-paragraph">{experience.title}</p>
                <ul>
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
