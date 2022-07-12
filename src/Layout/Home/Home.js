import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";

import ViewDeckButton from "./ViewDeckBtn";
import StudyDeckButton from "./StudyDeckBtn";
import DeleteDeckButton from "./DeleteDeckBtn";

import "../Layout.css";

function Home() {
  const [decks, setDecks] = useState([]);

  // Loading all of the decks from the API
  useEffect(() => {
    async function loadDecks() {
      const response = listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }
    loadDecks();
  }, []);

  return (
    <div>
      
   
  
      {/* Creating a Bootstrap card for each deck and the associated buttons */}
      {decks.map((deck, index) => {
        return (
      
          <div class="element"> 
          <div className="card-text-center">
              <div className="deck-main " key={index}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{deck.name}</h5>
                    <h6 className="card-subtitle text-muted">
                      {deck.cards.length} Cards
                    </h6>
                  </div>
                  <p className="card-text">{deck.description}</p>
                  <div className="d-flex">
                    <div className="mr-auto">
                      <ViewDeckButton deck={deck} />
                      <StudyDeckButton deck={deck} />
                      <DeleteDeckButton deck={deck} />
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
        );
      })}
    </div>
  );
}

export default Home;
