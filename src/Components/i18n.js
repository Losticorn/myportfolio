import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init(
  {
    debug: true,
    fallbackLng: "cz",
    resources: {
      sk: {
        translation:{
          navigation: {
            nav1: "O MNE",
            nav2: "PORTFÓLIO",
            nav3: "KONTAKT",
          },
          hero: {
            line1: "Potrebujete webovku?",
            line2: "Ja Vám ju vytvorím!",
            btn: "Kontaktujte ma!",
          },
          about: {
            header1: "O mne",
            header2: "Čo používam pri práci",
            text: "Zdravím. Volám sa Jaroslav a tvorím webové stránky. Keď nepracujem, tak sa bavím hraním hier alebo trávim čas s mojím psom. Teším sa až sa mi ozvete!",
          },
          projects: {
            header1: "Nedávne projekty",
            header2: "Stránka pre cech",
            header3: "Ukážka mapy (prebieha práca)",
            text1: "Môj úplne prvý projekt pre mojich online herných priateľov. Prvá verzia stránky bola vytvorená v čistom HTML/CSS, no neskôr som ju prerobil v ReactJS. Na tejto stránke pracujem dodnes.",
            text2: "Tento projekt bol súčasťou mojej žiadosti o zamestnanie. Naučilo ma to pracovať s dokumentáciou OpenLayers a preverilo moje znalosti JavaScriptu.",
          },
          contact: {
            header: "Kontaktné informácie",
            line1: "Meno: Jaroslav Fiľo",
            line2: "E-mail: jaroslavfilo95@gmail.com",
            line3: "Telefónne číslo: +420 777 729 301",
          },
        }
      },
      en:{
        translation:{
          navigation: {
            nav1: "ABOUT",
            nav2: "PORTFOLIO",
            nav3: "CONTACT",
          },
          hero: {
            line1: "Need a web?",
            line2: "I will do it for you!",
            btn: "Contact me!",
          },
          about: {
            header1: "About me",
            header2: "What I use",
            text: "Hello there! My name is Jaroslav, and I create websites. When I am not working, you will find me either playing video games or spending time with my dog.  I am looking forward hearing from you!",
          },
          projects: {
            header1: "Latest projects",
            header2: "Guild Page",
            header3: "Map demonstration (work in progress)",
            text1: "My very first project for my online gaming friends. First version of page was made in pure HTML/CSS, but later on I reworked it in ReactJS. I keep working on this page to this day.",
            text2: "This project was a part of my job application. It taught me how to work with OpenLayers documentation and significantly challenged my knowledge of JavaScript.",
          },
          contact: {
            header: "Contact information",
            line1: "Name: Jaroslav Fiľo",
            line2: "E-mail: jaroslavfilo95@gmail.com",
            line3: "Phone number: +420 777 729 301",
          },
        }
      },
      cz: {
        translation:{
          navigation: {
            nav1: "O MNĚ",
            nav2: "PORTFÓLIO",
            nav3: "KONTAKT",
          },
          hero: {
            line1: "Potřebuje webovku?",
            line2: "Já Vám jí vytvořím!",
            btn: "Kontaktujte mně!",
          },
          about: {
            header1: "O mně",
            header2: "Co používám při práci",
            text: "Ahoj! Jmenuji se Jaroslav a tvořím webové stránky. Když nepracuji, najdete mě buď při hraní videoher, nebo trávím čas se svým psem. Těším se na vaši zprávu!",
          },
          projects: {
            header1: "Nejnovější projekty",
            header2: "Cechovní stránka",
            header3: "Ukázka mapy (probíhá práce)",
            text1: "Můj úplně první projekt pro mé přátele online hraní. První verze stránky byla vytvořena v čistém HTML/CSS, ale později jsem ji přepracoval v ReactJS. Na této stránce pracuji dodnes.",
            text2: "Tento projekt byl součástí mé žádosti o zaměstnání. Naučilo mě to pracovat s dokumentací OpenLayers a prověřilo mé znalosti JavaScriptu.",
          },
          contact: {
            header: "Kontaktní informace",
            line1: "Jméno: Jaroslav Fiľo",
            line2: "E-mail: jaroslavfilo95@gmail.com",
            line3: "Telefonní číslo: +420 777 729 301",
          },
        }
      } 
    }
  }
)

// importuj to do main.jsx
/* useTranslation importuj do app.jsx const{t} = useTranslation()


sem dás <LanguageSelector />
<h1>{t"greeting"}</h1>
*/


