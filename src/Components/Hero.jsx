import React from "react";
import NavigationBar from "./Navigation.jsx";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <NavigationBar></NavigationBar>
      <section className="hero-section">
        <div className="centered-text">
          <h1>{t("hero.line1")}</h1>
          <h1>{t("hero.line2")}</h1>
          <a href="#contact">
            <button className="quote-btn">{t("hero.btn")}</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
