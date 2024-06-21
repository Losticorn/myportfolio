import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h1>Latest projects</h1>
      <div className="projects-container">
        <div className="project">
          <a href="https://dirtyzukandtheboyz.netlify.app/" target="_blank">
            <img src="guildpage-thumbnail.png"></img>
          </a>
          <h2>Guild Page</h2>
          <p>
            My very first project for my online gaming friends. First version of
            page was made in pure HTML/CSS, but later on I reworked it in
            ReactJS. I keep working on this page to this day.
          </p>
        </div>
        <div className="project">
          <img src="openlayers-demo.png"></img>
          <h2>Map demonstration</h2>
          <p>
            This small project was part of my search for a job. This
            demonstration was part of my job application. This project tought me
            how to work with OpenLayers documentation and greatly challenged my
            knowledge of JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
