import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <div className="projects-container">
        <div className="project">
          <a href="https://dirtyzukandtheboyz.netlify.app/" target="_blank">
            <img src="guildpage-thumbnail.png"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
