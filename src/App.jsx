import "./App.css";
import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/Back-to-top-button.jsx";
import { Contact } from "./components/Contact.jsx";

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
