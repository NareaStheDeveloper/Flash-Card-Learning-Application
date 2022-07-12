import React from "react";
import { useHistory } from "react-router-dom";


function StudyDeckButton({ deck }) {
  const history = useHistory();
  return (
    <div
      type="button"
      className="nav-button btn btn-info mr-2"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="oi oi-book" /> &nbsp;&nbsp;Study
    </div>
  );
}

export default StudyDeckButton;