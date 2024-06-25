import "./About.css";
import SkillAnimation from "./SkillsAnimation";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="about-section">
        <div className="skills-text">
          <h1>{t("about.header1")}</h1>
        </div>
        <div className="about-me">
          <p>{t("about.text")}</p>
          <img src="https://picsum.photos/400"></img>
        </div>
        <SkillAnimation></SkillAnimation>
      </section>
    </>
  );
}

export default About;
