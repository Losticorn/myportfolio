import React from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import { Contact } from "./Contact.jsx";

const Page = () => {
  return (
    <>
      <div className="page" id="page1">
        <li>
          <span>
            <Hero></Hero>
          </span>
        </li>
      </div>
      <div className="page" id="page2">
        <li>
          <span>
            <About></About>
          </span>
        </li>
      </div>
      <div className="page" id="page3">
        <li>
          <span>
            <Projects></Projects>
          </span>
        </li>
      </div>
      <div className="page" id="page4">
        <li>
          <span>
            <Contact></Contact>
          </span>
        </li>
      </div>
    </>
  );
};

export default Page;
