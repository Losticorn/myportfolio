import "./App.css";
import React from "react";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
import BackToTopButton from "./Components/Back-to-top-button.jsx";
import SkillAnimation from "./Components/SkillsAnimation.jsx";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <SkillAnimation></SkillAnimation>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </>
  );
}

export default App;
