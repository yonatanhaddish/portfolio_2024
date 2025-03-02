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
import Box from "@mui/material/Box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const styles = {
  modal_container: {
    color: "#000",
    border: "1px solid #000",
    height: "30px",
    width: "30px",
    backgroundColor: "#e6e6e6",
    "&:hover": {
      backgroundColor: "#4441f5",
      scale: 1.2,
    },
  },
  dialog_action: {
    gap: "20px",
    marginBottom: "10px",
    marginRight: "10px",
  },
  dialog_content: {
    backgroundColor: "#e6e6e6",
  },
  dialog_title: {
    backgroundColor: "#0441f5",
    color: "#e6e6e6",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const projectData = [
  {
    img: alemCoffee,
    title: "Alem Cafe",
    description:
      "A beautifully designed website for a local café, showcasing their menu, location, and customer reviews. Built with React and Material UI, featuring a smooth user experience and responsive design for all devices.",
  },
  {
    img: alphaTimber,
    title: "Alpha Timber",
    description:
      "An e-commerce platform for a timber supplier, allowing customers to browse products, request quotes, and place orders. Developed using Next.js, Node.js, and PostgreSQL, with a focus on fast performance and secure transactions.",
  },
  {
    img: summerHouse,
    title: "Summer House",
    description:
      "A booking system for vacation rentals, enabling users to browse properties, check availability, and book stays. Built with React, Express.js, and MongoDB, incorporating Stripe for secure payments.",
  },
  {
    img: zuWeddingDecor,
    title: "Zu Wedding Decor",
    description:
      "A portfolio website for a wedding decor business, featuring a gallery, customer testimonials, and a contact form. Created using Next.js, Tailwind CSS, and integrated with a CMS for easy content updates.",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Project() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

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
      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={handleClose}
          disableEnforceFocus
          BackdropProps={{ "aria-hidden": false }}
        >
          <DialogTitle sx={styles.dialog_title}>
            {selectedProject?.title}
          </DialogTitle>
          <Box sx={styles.dialog_content}>
            <DialogContent>
              <DialogContentText>
                {selectedProject?.description || "No details available."}
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={styles.dialog_action}>
              <Button onClick={handleClose} sx={styles.modal_container}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Button>
              <Button onClick={handleClose} sx={styles.modal_container}>
                <FontAwesomeIcon icon={faLink} size="lg" />
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      )}
    </div>
  );
}

export default Project;
