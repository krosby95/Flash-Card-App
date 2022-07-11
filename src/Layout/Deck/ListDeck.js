import React from "react";
import {Link} from "react-router-dom"
import {deleteDeck} from "../../utils/api/index";

function DeckList({decks}){
  const handleDelete = async ({target}) => {
    const confirm =window.confirm("Delete this deck? You will not be able to recover it.")
    if(confirm){
      const id = target.parentNode.value;
      await deleteDeck(id);
      window.location.reload
    }
    
    return (
    <div>
        {decks.map((deck, index)=> (
        <div key={index}>
            <div>
               <div>
                 <div>
                <h3>{deck.name}</h3>
               </div>
               <div>
                <p>{deck.card.length} cards </p>
               </div>
            </div>
                     
            <p>{deck.description}</p>
            <div>
              <div>
                <div>
                  <Link to={`/decks/${deck.id}`}>
                    <button>View</button>
                  </Link>
                  <Link to={`/decks/${deck.id}/study`}>
                    <button>Study</button>
                    </Link> 
                </div>
                
               <div>
                 <button value={deck.id} onClick={handleDelete}>
                 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        </div>
    )
  }}
export default DeckList;