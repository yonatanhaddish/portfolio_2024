import React from "react";
import "./index.css";
import alemCoffee from "../../images/alem_coffee.jpeg";
import alphaTimber from "../../images/alpha_timber.jpeg";
import summerHouse from "../../images/summer_house.jpeg";
import zuWeddingDecor from "../../images/zu_wedding_decor.jpeg";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const projectData = [
  {
    img: alemCoffee,
    title: "Alem Cafe",
  },
  {
    img: alphaTimber,
    title: "Alpha Timber",
  },
  {
    img: summerHouse,
    title: "Summer House",
  },
  {
    img: zuWeddingDecor,
    title: "Zu Wedding Decor",
  },
];

function Project() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <button className="view-project" onClick={handleOpen}>
              View Project
            </button>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Project;
