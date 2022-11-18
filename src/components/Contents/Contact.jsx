import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">

      <h2>Feel free to contact me!</h2>

      <div className="linkedin">
        <h2 style={{ color: "#D7BA7D" }}>{".linkedin {"}</h2>
        <AiFillLinkedin
          size={"40px"}
          color="#FFFFFF"
          // style={{ marginLeft: "2rem" }}
        />
        <h2 style={{ color: "#D7BA7D" }}>{"}"}</h2>
      </div>

      <div className="github">
        <h2 style={{ color: "#D7BA7D" }}>{".github {"}</h2>
        <AiFillGithub
          size={"40px"}
          color="#FFFFFF"
          // style={{ marginLeft: "2rem" }}
        />
        <h2 style={{ color: "#D7BA7D" }}>{"}"}</h2>
      </div>
      <div className="calendly"></div>
    </div>
  );
}

export default Contact;
