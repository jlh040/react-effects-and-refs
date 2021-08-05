import { react, useState, useEffect } from 'react';
import Card from './Card'

const GameTable = () => {
  const [cards, setCards] = useState([]);
  const [deckId, setDeckId] = useState('');

  return (
    <div>
      {cards.map(card => <Card image={card.image} />)}
    </div>
  )
};

export default GameTable;