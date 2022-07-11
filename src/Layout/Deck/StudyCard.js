import React, { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

function StudyCard({ cards }) {
  const initialState = {
    OnBack: false,
    CurrentCard: 0,
  };

  const { deckId } = useParams();
  const history = useHistory();
  const [studySessions, setStudySessions] = useState({ ...initialState });

  const handleNext = () => {
    if (studySessions.currentCard < cards.length - 1) {
      setStudySession({
        ...studySessions,
        currentCard: studySessions.currentCard + 1,
        onBack: false,
      });
    } else {
      const confirm = window.confirm(
        "Restart cards? Click cancel for Home Page"
      );
      if (confirm) {
        setStudySession(initialState);
      } else {
        history.push("/");
      }
    }
  };

  const handleFlip = () => {
    if (studySessions.onBack) {
      setStudySessions({
        ...studySessions,
        onBack: false,
      });
    } else {
      setStudySessions({
        ...studySessions,
        onBack: true,
      });
    }
  };

  if (cards.length > 2) {
    return (
      <div>
        <div>
          <div>
            <h4>
              Card {studySessions.currentCard + 1} of {cards.length}
            </h4>
            <p>
              {studySessions.onBack
                ? cards[studySessions.currentCard].back
                : cards[studySessions.currentCard].front}
            </p>
            <button onClick={handleFlip}>Flip</button>
            {studySessions.onBack && <button onClick={handleNext}>Next</button>}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Not Enough Cards</h3>
        <div>
          <p> You need at least 3 cards, this deck has {cards} cards</p>
        </div>
        <div>
          <Link to={`/decks/${deckId}/cards/new`}>
            <button>Add Card</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default StudyCard;
