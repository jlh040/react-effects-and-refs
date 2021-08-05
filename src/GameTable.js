import { React, useState, useEffect, useRef } from 'react';
import Card from './Card'
import axios from 'axios';

const GameTable = () => {
  const [cards, setCards] = useState([]);
  const deckId = useRef();
  const handleChange = async () => {
    const res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`);
    const {code, image} = res.data.cards[0];
    setCards(cardArr => [
      ...cardArr,
      {code, image}
    ])
  };
  
  useEffect(() => {
    (async () => {
      const res = await axios.get('http://deckofcardsapi.com/api/deck/new/');
      deckId.current = res.data.deck_id;
    })();
  }, [])


  return (
    <div>
      <div>
        <button onClick={handleChange}>Gimme a card!</button>
      </div>
      <div>
        {cards.length !== 0 ? cards.map(card => <Card key={card.code} image={card.image} />) : 'No cards drawn...'}
      </div>
    </div>
  )
};

export default GameTable;

