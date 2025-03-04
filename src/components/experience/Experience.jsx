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
        "Associate Software Developer | TD Bank | December 2023 - July 2024",
      details: [
        "Collaborated in the development of a dynamic web application using Angular for the front-end and NodeJs with MSSQL for the back-end, resulting in a highly responsive and user-friendly interface.",
        "Collaborated in the development of a dynamic web application using React for the front end and resulting in a highly responsive and user-friendly interface.",
        "Collaborated with cross-functional teams to deploy a NodeJs application into Azure clouds.",
      ],
    },
    {
      id: "02",
      title:
        "Associate Software Engineer | TD Bank | December 2022 - December 2023",
      details: [
        "Mastered basic about Network. Load balancer(F5).",
        "Mastered how to deploy a webpage using Ansible into remote nodes (servers).",
        "Collaborated in the development of Automating Network Load-Balancer using Ansible and Ansible Tower Platform.",
      ],
    },
    {
      id: "03",
      title:
        "Blockchain Developer (Internship) | Snapbrillia | December 2021 - September 2022",
      details: [
        "Doing research on developing a new technology Web3 Application using Haskell Programming Language",
      ],
    },
    {
      id: "04",
      title: "FrontEnd Developer | Angish Consulting | August 2018 - July 2019",
      details: [
        "Collaborated with customers to determine needs and work through design and options.",
        "Built layouts according to customers parameters using HTML5 and CSS.",
        "Improved and designed new layouts to achieve usability and performance objectives.",
      ],
    },
  ];

  return (
    <div className="experience-container" id="experience">
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
