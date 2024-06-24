import "./About.css";
import { useEffect, useRef } from "react";

function SkillAnimation() {
  const skillRef = useRef();
  useEffect(() => {
    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const HiddenElements = document.querySelectorAll(".hidden");
    HiddenElements.forEach((el) => Observer.observe(el));
  }, []);

  return (
    <section ref={skillRef} id="section" className="hidden">
      <h1>What I use</h1>
      <div className="logos">
        <div className="logo hidden">
          <img src="/free-html-5-1-1175208.webp"></img>
        </div>
        <div className="logo hidden">
          <img src="css-icon.webp"></img>
        </div>
        <div className="logo hidden">
          <img src="javascript-js-icon-2048x2048-nyxvtvk0.png"></img>
        </div>
        <div className="logo hidden">
          <img src="1280px-Sass_Logo_Color.svg.png"></img>
        </div>
        <div className="logo hidden">
          <img src="React-icon.svg.png"></img>
        </div>
        <div className="logo hidden">
          <img src="Typescript_logo_2020.svg.png"></img>
        </div>
        <div className="logo hidden">
          <img src="github.png"></img>
        </div>
        <div className="logo hidden">
          <img src="Git-Icon-1788C.png"></img>
        </div>
      </div>
    </section>
  );
}

export default SkillAnimation;
