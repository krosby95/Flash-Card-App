import React from "react";
import { Link } from "react-router-dom";
function Card({ card, handleCardDelete }) {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>

          <div>
            <div>
              <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button value={card.id} onClick={handleCardDelete}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
