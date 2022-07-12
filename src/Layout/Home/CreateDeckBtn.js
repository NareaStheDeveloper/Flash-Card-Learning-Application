import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <div
      type="button"
      className="crt-deck-btn btn btn-link btn-lg"
      onClick={() => history.push("/decks/new")}
    >
      <span className="oi oi-plus" /> &nbsp;Add New Deck
    </div>
  
  );
}

export default CreateDeckButton;
