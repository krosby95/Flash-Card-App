import React from "react";
import { Link } from "react-router-dom";
import ListDecks from "./Deck/ListDeck";

function Home({ decks, setDecks }) {
  return (
    <div>
      <div>
        <Link to="/decks/new">
          <button className="btn btn-primary btn-large">Create Deck</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
