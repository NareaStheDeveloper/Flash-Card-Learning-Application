import React from "react";
import { useHistory } from "react-router-dom";
import DeckScreenDeleteDeckButton from "./DeckScreenDeleteBtn";
import DeckScreenCard from "./DeckScreenCard";

// This component displays all of a specific deck's info and the buttons used to interact with the deck
function DeckInfo({ deckName, deckDescription, deckId, cards, url }) {
  const history = useHistory();

  return (
    <div className="card-main padded mt-5">
      <div className="row-auto pb-2"></div>
      <div className="study-text mt-3 mb-5 justify-content-center">
        {" "}
        <h1>{deckName}</h1>
      </div>
      <p>{deckDescription}</p>

      <div className="d-flex mb-2">
        <div className="mr-auto">
          <div
            type="button"
            className="nav-button btn btn-warning mr-2"
            onClick={() => history.push(`/decks/${deckId}/edit`)}
          >
            <span className="oi oi-pencil" />
            &nbsp;&nbsp; Edit
          </div>
          <div
            type="button"
            className="nav-button btn btn-info mr-2"
            onClick={() => history.push(`/decks/${deckId}/study`)}
          >
            <span className="oi oi-book" /> &nbsp;&nbsp;Study
          </div>
          <div
            type="button"
            className="nav-button btn btn-info"
            onClick={() => history.push(`/decks/${deckId}/cards/new`)}
          >
            <span className="oi oi-plus" /> &nbsp;&nbsp;Add Card
          </div>
        </div>

        <div>
          <DeckScreenDeleteDeckButton deckId={deckId} />
        </div>
      </div>

      <div className="edit-text mt-5">
        <h2>Cards</h2>
      </div>
      {/* Renders the cards in the deck and the edit card and delete card buttons */}
      <DeckScreenCard cards={cards} deckId={deckId} url={url} />
    </div>
  );
}

export default DeckInfo;
