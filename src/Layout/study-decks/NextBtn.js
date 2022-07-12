import React from "react";

function NextButton({ NextCardHandler }) {
  return (
    <button type="button" className="nav-button btn btn-info btn-md" onClick={NextCardHandler}>
      Next
    </button>
  );
}

export default NextButton;