import React from "react";
import Mail from "../../Assets/Images/SVG/mail.svg";
import Call from "../../Assets/Images/SVG/call.svg";

const ContactPage = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <div className="contact-content">
        <div className="contact-head">
          <p className="display-1">Let's Talk</p>
        </div>
        <div className="contact-title">
          <p>What is your preferred mean of communication?</p>
          <div className="contact-by">
            <div className="by-mail">
              <img src={Mail} alt="" />
              <span>By mail</span>
            </div>
            <div className="by-call">
              <img src={Call} alt="" />
              <span>By call</span>
            </div>
          </div>
        </div>
        </div>
        <div className="copy-right p-4">
          <a href="#">© 2024, Design by Aarif Ansari</a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
