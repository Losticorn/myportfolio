import "./About.css";

function About() {
  return (
    <>
      <section className="about-section">
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
        <div className="skills-container">
          <img src="free-html-5-1-1175208.webp"></img>
          <img src="css-icon.webp"></img>
          <img src="javascript-js-icon-2048x2048-nyxvtvk0.png"></img>
          <img src="1280px-Sass_Logo_Color.svg.png"></img>
          <img src="React-icon.svg.png"></img>
          <img src="Typescript_logo_2020.svg.png"></img>
          <img src="github.png"></img>
          <img src="Git-Icon-1788C.png"></img>
        </div>
      </section>
    </>
  );
}

export default About;
