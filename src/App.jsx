import "./App.css";
import React from "react";
import Hero from "./componentos/Hero.jsx";
import About from "./componentos/About.jsx";
import Projects from "./componentos/Projects.jsx";
import Footer from "./componentos/Footer.jsx";
import BackToTopButton from "./componentos/Back-to-top-button.jsx";
import { Contact } from "./componentos/Contact.jsx";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default App;
