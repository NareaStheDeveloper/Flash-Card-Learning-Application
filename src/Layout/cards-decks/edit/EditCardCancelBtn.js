import React from "react";
import { useHistory } from "react-router-dom";

function EditCardCancelButton({ deckId }) {
  const history = useHistory();

  return (
    <div
      type="button"
      className="nav-button btn btn-danger mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Cancel
    </div>
  );
}

export default EditCardCancelButton;
