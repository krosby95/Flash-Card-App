import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import EditCard from "./Card/EditCard";
import NewDeck from "./Deck/CreateDeck";
import { listDecks } from "../utils/api/index";
function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    setDecks([]);
    const abortController = new AbortController();
    //load decks from api
    async function loadDecks() {
      try {
        const loadedDecks = await listDecks();
        setDecks(loadedDecks);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }
    loadDecks();
    return () => abortController.abort();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>

          <Route path={"/decks/new"}>
            <NewDeck />
          </Route>

          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
            <EditCard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
