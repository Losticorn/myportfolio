import React from "react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const NavigationNew = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul className="navigation">
        <a href="#content1">
          <li id="home">{t("navigation.nav0")}</li>
        </a>
        <a href="#content2">
          <li id="about">{t("navigation.nav1")}</li>
        </a>
        <a href="#content3">
          <li id="projects">{t("navigation.nav2")}</li>
        </a>
        <a href="#content4">
          <li id="contact">{t("navigation.nav3")}</li>
        </a>
      </ul>
      <LanguageSelector></LanguageSelector>
    </>
  );
};

export default NavigationNew;
