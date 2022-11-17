import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      Made with React in 2022
      <a
        href={"https://github.com/BatuhanUlucay"}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={"40px"} color="#FFFFFF" />
      </a>
      <a
        href={"https://www.linkedin.com/in/batuhan-ulu%C3%A7ay-0aa6b9125/"}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={"40px"} color="#FFFFFF" />
      </a>
    </div>
  );
}

export default Footer;
