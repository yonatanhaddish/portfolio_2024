import React from "react";
import "./index.css";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_slx3nvi";
const TEMPLATE_ID = "template_ryy8wqk";
const PUBLIC_KEY = "X40iR-BWrNLaMeJgL";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log("11111111111", result);
        alert("Message Sent");
      },
      (error) => {
        console.log("222222222", error);
        alert("Error Sending Message. Please try again!!!");
      }
    );
    e.target.reset();
  }
  return (
    <div className="contact-container">
      <div className="contact-heading">Contact</div>
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
                />
              </div>
              <div className="contact-info" id="l-name">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="contact-info" id="email-info">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="contact-info"
              />
            </div>
            <div className="contact-info" id="msg-info">
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Your Message here!"
              />
            </div>
            <button type="sumbit" className="contact-btn">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
