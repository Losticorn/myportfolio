import "./About.css";
import SkillAnimation from "./SkillsAnimation";

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
        <SkillAnimation></SkillAnimation>
      </section>
    </>
  );
}

export default About;
