import React, { useRef } from "react";
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
    <div>
      <div></div>
      <div>
        <div></div>
        <div>
          <form onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Your Message here!"
              />
            </div>
            <div>
              <button type="sumbit">Send Email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
