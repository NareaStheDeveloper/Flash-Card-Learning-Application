import React from "react";


function FlipButton({ setIsFrontOfCard }) {
  const flipCardHandler = () => {
    setIsFrontOfCard((currentSide) => !currentSide);
  };

  return (
    <button type="button" className="nav-button btn btn-warning btn-md mr-2" onClick={flipCardHandler}>
      Flip
    </button>
  );
}

export default FlipButton;
