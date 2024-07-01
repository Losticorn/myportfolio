import "./App.css";
import React from "react";
import NavigationNew from "./components/navigationNew.jsx";
import Page from "./components/page.jsx";

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
