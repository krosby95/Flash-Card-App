import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api/index";
import BreadCrumb from "../BreadCrumb";
import CardList from "../Card/CardsList";

function Deck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  //load Deck and cards

  useEffect(() => {
    async function loadDeck() {
      if (deckId) {
        const loadedDeck = await readDeck(deckId);
        setDeck(() => loadedDeck);
      }
    }
    loadDeck();
  }, [deckId]);

  //delete the deck
  const handleDeckDelete = async () => {
    const confirm = window.confirm(
      "delete this deck? You wont be able to recover it"
    );
    if (confirm) {
      await deleteDeck(deckId);
      history.push("/");
    }
  };

  if (deck.id) {
    return (
      <div>
        <BreadCrumb
          link={`/decks/${deckId}`}
          linkName={deck.name}
          pageName={deck.name}
        />
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div>
          <div>
            <Link to={`/decks/${deckId}/edit`}>
              <button>Edit</button>
            </Link>

            <Link to={`/decks/${deckId}/study`}>
              <button>Study</button>
            </Link>

            <Link to={`/decks/${deckId}/cards/new`}>
              <button>Add Card</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDeleteDeck}>Delete</button>
          </div>
        </div>
        <CardList deck={deck} />
      </div>
    );
  }
  return "No Deck Here! Please create a new deck";
}

export default Deck;
