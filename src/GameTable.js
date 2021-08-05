import { react, useState, useEffect, useRef } from 'react';
import Card from './Card'
import axios from 'axios';

const GameTable = () => {
  const [cards, setCards] = useState(null);
  let deckId = useRef();
  useEffect(() => {
    (async () => {
      const res = await axios.get('http://deckofcardsapi.com/api/deck/new/');
      deckId.current = res.data.deck_id;
    })();
  }, [])


  return (
    <div>
      <div>
        <button>Gimme a card!</button>
      </div>
      <div>
        {cards ? cards.map(card => <Card image={card.image} />) : 'Loading...'}
      </div>
    </div>
  )
};

export default GameTable;

