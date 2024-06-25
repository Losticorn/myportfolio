import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const languages = [
  { code: "cz", lang: "Čeština", flag: "cz-flag.png" },
  { code: "sk", lang: "Slovenčina", flag: "sk-flag.png" },
  { code: "en", lang: "English", flag: "uk-flag.png" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <a
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <img src={lng.flag} />
          </a>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
