import React from "react";
import "./Navigation.css";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

function NavigationBar() {
  const { t } = useTranslation();

  return (
    <>
      <div id="navigation-bar" className="navigation-bar-container">
        <ul>
          <a href="#about">
            <li>{t("navigation.nav1")}</li>
          </a>
          <a href="#portfolio">
            <li>{t("navigation.nav2")}</li>
          </a>
          <a href="#contact">
            <li>{t("navigation.nav3")}</li>
          </a>
        </ul>
        <LanguageSelector />
      </div>
    </>
  );
}

export default NavigationBar;
