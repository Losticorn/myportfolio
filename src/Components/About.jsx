import "./About.css";
import SkillAnimation from "./SkillsAnimation";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="about-me">
        <p>{t("about.text")}</p>
        <img src="https://picsum.photos/400"></img>
      </div>
      <SkillAnimation></SkillAnimation>
    </>
  );
}

export default About;
