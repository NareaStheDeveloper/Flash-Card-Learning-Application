import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Study from "./study-decks/Study";
import CreateDeckScreen from "./new-decks/CreateDeckScreen";
import DeckScreen from "./decks/DeckScreen";
import EditDeckScreen from "./edit-decks/EditDeckScreen";
import AddCardScreen from "./cards-decks/new/AddScreenCard";
import EditCardScreen from "./cards-decks/edit/EditCardScreen";
import NotFound from "./NotFound";

function Layout() {
  return (
    <div>
      
       <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeckScreen />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCardScreen />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardScreen />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <DeckScreen />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Layout;