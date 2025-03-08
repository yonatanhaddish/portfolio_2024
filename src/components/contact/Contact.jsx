import React, { useState, useEffect } from "react";
import "./index.css";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_slx3nvi";
const TEMPLATE_ID = "template_ryy8wqk";
const PUBLIC_KEY = "X40iR-BWrNLaMeJgL";

function Contact() {
  const [selectedBox, setSelectedBox] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [buttonDisabledClass, setButtonDisabledClass] =
    useState("button-not-active");
  function handleChange(e) {
    setSelectedBox(e.target.id);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        // console.log("11111111111", result);
        alert("Message Sent");
      },
      (error) => {
        // console.log("222222222", error);
        alert("Error Sending Message. Please try again!!!");
      }
    );
    e.target.reset();
  };

  useEffect(() => {
    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      setButtonState(false);
      setButtonDisabledClass("button-active");
    } else {
      setButtonState(true);
    }
  });
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   console.log({
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     message: message,
  //   });
  // };
  const checkButtonState = () => {
    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      setButtonState(false);
    }
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-container" id="contact">
      {/* <div className="contact-heading">Contact</div> */}
      <div className="contact-sub-container">
        <div className="contact-img"></div>
        <div className="contact-form">
          <form onSubmit={sendEmail} className="form">
            <div className="f-l-name">
              <div className="contact-info" id="f-name">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  // onFocus={handleChange}
                  onChange={handleChangeFirstName}
                  className={selectedBox === "first_name" ? "active-input" : ""}
                />
              </div>
              <div className="contact-info" id="l-name">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  // onFocus={handleChange}
                  onChange={handleChangeLastName}
                  className={selectedBox === "last_name" ? "active-input" : ""}
                />
              </div>
            </div>
            <div className="contact-info" id="email-info">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                // onFocus={handleChange}
                onChange={handleChangeEmail}
                className={selectedBox === "email" ? "active-input" : ""}
              />
            </div>
            <div className="contact-info" id="msg-info">
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Your Message here!"
                // onFocus={handleChange}
                onChange={handleChangeMessage}
                className={selectedBox === "message" ? "active-input" : ""}
              />
            </div>
            <button
              type="sumbit"
              // className="contact-btn"
              className={`contact-btn ${buttonDisabledClass}`}
              disabled={buttonState}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
