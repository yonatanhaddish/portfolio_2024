import React, { useRef } from "react";
import "./index.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    console.log("Email Sent!!!");
  }
  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div>
          <form onSubmit={sendEmail}>
            <div>
              <input type="text" name="first_name" placeholder="First Name" />
            </div>
            <div>
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" name="email" placeholder="Email" />
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
