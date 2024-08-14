import React, { useState } from 'react';
import Card from './Card';

const Form = () => {

  const [name, setName] = useState('');
  const [anime, setAnime] = useState('');

  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || anime.trim().length < 6) {
        
        setError('Please check that the information is correct.');
        setShowCard(false);

      } else {
        setError('');
        setShowCard(true);
      }
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Anime's Name" 
          value={anime} 
          onChange={(e) => setAnime(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {showCard && <Card name={name} anime={anime} />}
    </div>
  );
};

export default Form;
