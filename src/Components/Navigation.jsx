import React from "react";
import "./Navigation.css";

function NavigationBar() {
  return (
    <>
      <div id="navigation-bar" className="navigation-bar-container">
        <ul>
          <a href="#about">
            <li>ABOUT</li>
          </a>
          <a href="#portfolio">
            <li>POTRFOLIO</li>
          </a>
          <a href="#contact">
            <li>CONTACT</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavigationBar;
