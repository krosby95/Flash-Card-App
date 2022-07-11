import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
import StudyCard from "./StudyCard";

function StudyDeck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      console.log(newDeck);
    }
    loadDeck();
  }, [deckId]);

  if (Object.keys(deck).length) {
    return (
      <div>
        <BreadCrumb
          link={`/decks/${deckId}`}
          linkName={deck.name}
          pageName={"Study"}
        />
        <div className="row">
          <h2>Study: {deck.name}</h2>
        </div>
        <div className="row">
          <StudyCard cards={deck.cards} />
        </div>
      </div>
    );
  } else return "Loading deck here...";
}

export default StudyPage;
