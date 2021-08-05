import { react, useState, useEffect } from 'react';

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