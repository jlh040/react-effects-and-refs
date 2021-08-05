import { React, useState, useEffect, useRef } from 'react';
import Card from './Card'
import axios from 'axios';

const GameTable = () => {
  const [cards, setCards] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const deckId = useRef();
  const intervalId = useRef()
  const handleChange = () => {
    isDrawing ? setIsDrawing(false) : setIsDrawing(true);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://deckofcardsapi.com/api/deck/new/');
      deckId.current = res.data.deck_id;
      await axios.get(`http://deckofcardsapi.com/api/deck/${deckId.current}/shuffle/`);
    })();
  }, []);

  useEffect(() => {
    if (isDrawing) {
      intervalId.current = setInterval(async () => {
        const res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`);
        if (res.data.error) {
          alert('Error: no cards remaining!');
          clearInterval(intervalId.current);
          return;
        }
  
        const {code, image} = res.data.cards[0];
        setCards(cardArr => [
          ...cardArr,
          {code, image}
        ])
        }, 1000)
    };
    return () => clearInterval(intervalId.current)
  }, [isDrawing])


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

