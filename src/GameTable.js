import { react, useState, useEffect } from 'react';
import Card from './Card'

const GameTable = () => {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState('');

  return (
    <div>
      <div>
        <button>Gimme a card!</button>
      </div>
      {cards.map(card => <Card image={card.image} />)}
    </div>
  )
};

export default GameTable;