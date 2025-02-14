import "./Propose.css";
import Button from "../../components/Button";
import { useState, useRef } from "react";

function Propose({ question }) {
  const buttonNoRef = useRef(null);

  const [position, setPosition] = useState({ position: "relative" });
  const [noText, setNoText] = useState("Não");
  const [showDiv, setShowDiv] = useState(true);
  const [showMessage, setShowMessage] = useState(false);


  function moveButton() {
    if (!buttonNoRef.current) return;

    const maxWidth = window.innerWidth - 100;
    const maxHeight = window.innerHeight - 50;

    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);

    setPosition({
      left: `${newX}px`,
      top: `${newY}px`,
      position: "absolute",
    })

    setShowDiv(false);
  }

  function changeText() {
    setNoText("Sim");
  }

  function yesClick() {
    setShowMessage(true);
    setPosition({ position: "relative" });
    setShowDiv(true);
  }

  return (
    <section className="propose">
      <h1>{question}</h1>
        <div className={showDiv ? "button-container" : ""}>
          <Button
            onClick={yesClick}
            className="button-yes"
          >
            Sim
          </Button>
          <Button
            onClick={changeText}
            onMouseEnter={moveButton}
            className="button-no"
            ref={buttonNoRef}
            style={position}
          >
            {noText}
          </Button>
          {showMessage && <p className="message">Eu sabia que você diria isso! ❤️</p>}
        </div>
    </section>
  );
}

export default Propose;
