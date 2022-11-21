import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { InlineWidget } from "react-calendly";

function Contact() {
  return (
    <div className="contact">
      <h1 style={{ color: "white" }}>Feel free to contact me!</h1>

      <div className="linkedin">
        <h2 style={{ color: "#D7BA7D", marginTop: "3rem" }}>{".linkedin {"}</h2>
        <a
          href="https://www.linkedin.com/in/batuhan-ulu%C3%A7ay-0aa6b9125/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={"40px"} color="#FFFFFF" />
        </a>
        <h2 style={{ color: "#D7BA7D" }}>{"}"}</h2>
      </div>

      <div className="github">
        <h2 style={{ color: "#D7BA7D" }}>{".github {"}</h2>
        <a
          href="https://github.com/BatuhanUlucay"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={"40px"} color="#FFFFFF" />
        </a>
        <h2 style={{ color: "#D7BA7D" }}>{"}"}</h2>
      </div>
      <div className="calendly">
        <InlineWidget url="https://calendly.com/batuhanulucay/30min" />
      </div>
    </div>
  );
}

export default Contact;
