import "./Back-to-top-button.css";
import { PiArrowSquareUpLight } from "react-icons/pi";
import "../Scripts/ShowBackToTopBtn.js";

function BackToTopButton() {
  return (
    <button id="backToTopBtn">
      <a href="#navigation-bar">
        <PiArrowSquareUpLight size={60} color="white" />
      </a>
    </button>
  );
}

export default BackToTopButton;
