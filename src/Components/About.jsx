import "./About.css";
import "../Scripts/ScrollAnimation.js";

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="skills-text">
          <h1>About me</h1>
        </div>
        <div className="about-me">
          <p>
            Hello there!<br></br>
            <br></br>My name is Jaroslav, and I create websites. When I'm not
            working, you'll find me either playing video games or spending time
            with my dog. <br></br>
            <br></br>Cheers!
          </p>
          <img src="https://picsum.photos/400"></img>
        </div>
        <h1>What I use</h1>
        <div class="logos">
          <div class="logo hidden">
            <img src="/free-html-5-1-1175208.webp"></img>
          </div>
          <div class="logo hidden">
            <img src="css-icon.webp"></img>
          </div>
          <div class="logo hidden">
            <img src="javascript-js-icon-2048x2048-nyxvtvk0.png"></img>
          </div>
          <div class="logo hidden">
            <img src="1280px-Sass_Logo_Color.svg.png"></img>
          </div>
          <div class="logo hidden">
            <img src="React-icon.svg.png"></img>
          </div>
          <div class="logo hidden">
            <img src="Typescript_logo_2020.svg.png"></img>
          </div>
          <div class="logo hidden">
            <img src="github.png"></img>
          </div>
          <div class="logo hidden">
            <img src="Git-Icon-1788C.png"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
