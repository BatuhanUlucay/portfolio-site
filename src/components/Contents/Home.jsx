import React from "react";
import photo from "../../assets/profile/photo.jpeg";
import { TypeAnimation } from "react-type-animation";

function Home() {

  return (
    <>
      <div className="home">
        <div className="img-container">
          <img src={photo} alt="me" className="photo" />
        </div>
        <div className="about-me">
          <h2>Hello, I'm Batuhan! I am a</h2>
          <p style={{ color: "#68C9F8" }}>console</p>.
          <p style={{ color: "#D6B879" }}>log</p>
          <p style={{ color: "#D4678F" }}>(</p>
          <p style={{ color: "#C96D3D" }}></p>
          <TypeAnimation
      sequence={[
        '"Software Engineer"', 
        1000, 
        '"Frontend Developer"', 
        1000, 
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2rem' }}
    />
          <p style={{ color: "#D4678F" }}>)</p>;
        </div>
      </div>
    </>
  );
}

export default Home;
