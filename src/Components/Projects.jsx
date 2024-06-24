import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="projects-section">
      <h1>{t("projects.header1")}</h1>
      <div className="projects-container">
        <div className="project">
          <a href="https://dirtyzukandtheboyz.netlify.app/" target="_blank">
            <img src="guildpage-thumbnail.png"></img>
          </a>
          <h2>{t("projects.header2")}</h2>
          <p>{t("projects.text1")}</p>
        </div>
        <div className="project">
          <img src="openlayers-demo.png"></img>
          <h2>{t("projects.header3")}</h2>
          <p>{t("projects.text2")}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
