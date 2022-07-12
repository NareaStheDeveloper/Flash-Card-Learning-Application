import React from "react";
import { useHistory } from "react-router";

function AddCardsButton({ deckId }) {
  const history = useHistory();
  return (
    <div
      type="button"
      className="nav-button btn btn-primary"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span className="oi oi-plus" /> Add Cards
    </div>
  );
}

export default AddCardsButton;