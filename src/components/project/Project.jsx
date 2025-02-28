import React, { useState } from "react";
import "./index.css";
import alemCoffee from "../../images/alem_coffee.jpeg";
import alphaTimber from "../../images/alpha_timber.jpeg";
import summerHouse from "../../images/summer_house.jpeg";
import zuWeddingDecor from "../../images/zu_wedding_decor.jpeg";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

const projectData = [
  {
    img: alemCoffee,
    title: "Alem Cafe",
    description: "A cozy café with the best coffee in town.",
  },
  {
    img: alphaTimber,
    title: "Alpha Timber",
    description: "Premium quality timber for all your construction needs.",
  },
  {
    img: summerHouse,
    title: "Summer House",
    description: "A beautiful vacation house for the summer.",
  },
  {
    img: zuWeddingDecor,
    title: "Zu Wedding Decor",
    description: "Elegant wedding decorations for your special day.",
  },
];

// Slide transition for the modal
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Open modal with project details
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  // Close modal and reset project state
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="project-container" id="projects">
      <div className="project-heading">Projects</div>
      <div className="project-cards-container">
        {projectData.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <p className="project-title">{project.title}</p>
            <button
              className="view-project"
              onClick={() => handleOpen(project)}
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Render Dialog only when open */}
      {open && (
        <Dialog
          open={open}
          trasition={Transition}
          onClose={handleClose}
          disableEnforceFocus
          backdropprops={{ "aria-hidden": false }}
        >
          <DialogTitle>{selectedProject?.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {selectedProject?.description || "No details available."}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default Project;
