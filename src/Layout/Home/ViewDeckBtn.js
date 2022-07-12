import React from "react";
import { useHistory } from "react-router-dom";

function ViewDeckButton({ deck }) {
  const history = useHistory();

  return (
    <div
      type="button"
      className="nav-button btn btn-warning text-grey mr-2"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      <span className="oi oi-eye" /> &nbsp;&nbsp;View
    </div>
  );
}

export default ViewDeckButton;