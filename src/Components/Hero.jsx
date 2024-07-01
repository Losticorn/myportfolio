import React from "react";
import "./Hero.css";
import NavigationBar from "./Navigation.jsx";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="centered-text">
        <h1>{t("hero.line1")}</h1>
        <h1>{t("hero.line2")}</h1>
        <a href="#content4">
          <button className="quote-btn">{t("hero.btn")}</button>
        </a>
      </div>
    </>
  );
}

export default Hero;
