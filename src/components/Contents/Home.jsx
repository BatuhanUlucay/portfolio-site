import React from "react";
import photo from "../../assets/photo.jpeg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="img-container">
          <img src={photo} alt="me" className="photo" />
        </div>
        <div className="about-me">
          <p style={{ color: "#68C9F8" }}>console</p>.
          <p style={{ color: "#D6B879" }}>log</p>
          <p style={{ color: "#D4678F" }}>(</p>
          <p style={{ color: "#C96D3D" }}>
            "Hello, I am Batuhan. I am a Fullstack Developer.
            <br /> I worked on self-driving cars for 3 years and recently I
            decided to become a web developer."
          </p>
          <p style={{ color: "#D4678F" }}>)</p>;
        </div>
      </div>
    </>
  );
}

export default Home;
