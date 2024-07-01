import "./App.css";
import React from "react";
<<<<<<< HEAD
import NavigationNew from "./Components/navigationNew.jsx";
import Page from "./Components/page.jsx";
=======
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/Back-to-top-button.jsx";
import { Contact } from "./components/Contact.jsx";
>>>>>>> d16fac685a05a09c3b52caf558a1b0eabf66431a

function App() {
  return (
    <>
      <div className="content" id="content1">
        <div className="content" id="content2">
          <div className="content" id="content3">
            <div className="content" id="content4">
              <section>
                <NavigationNew></NavigationNew>
                <Page></Page>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
