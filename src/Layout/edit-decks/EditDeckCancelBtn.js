import React from "react";
import { useHistory } from "react-router-dom";

function EditDeckCancelButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="nav-button btn btn-danger mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Cancel
    </button>
  );
}

export default EditDeckCancelButton;