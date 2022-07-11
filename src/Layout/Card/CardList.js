import React from "react";
import { Link, useParams } from "react-router-dom";
import { deleteCard, updateDeck } from "../../utils/api/index";

function CardList({ deck }) {
  const { deckId } = useParams();

  //delete a card

  const handleCardDelete = async ({ target }) => {
    const confirm = window.confirm("delete this card? you sure?");
    if (confirm) {
      deleteCard(target.value)
        .then(updateDeck(deckId))
        .then(window.location.reload());
    }
  };

  return (
    <div className="container">
      <h2>Cards</h2>
      <div className="card-list">
        {deck.cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-start my-2">
                  <div className="col-6">{card.front}</div>
                  <div className="col-6">{card.back}</div>
                </div>
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col-3 pt-2 pb-1">
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                      <button className="btn btn-secondary mr-1">Edit</button>
                    </Link>
                    <button
                      onClick={handleCardDelete}
                      value={card.id}
                      ClassName="btn btn-danger"
                    >
                      <i value={card.id} className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardsList;
