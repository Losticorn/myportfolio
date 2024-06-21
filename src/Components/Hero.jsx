import React from "react";
import NavigationBar from "./Navigation.jsx";
import "./Hero.css";

function Hero() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <section className="hero-section">
        <div className="centered-text">
          <h1>Need a web?</h1>
          <h1>I will do it for you.</h1>
          <button className="quote-btn">GET A QUOTE</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
