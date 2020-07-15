import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const showActors = actors.map(actor => {
    return(
      <div>
        <h2>Name: {actor.name}</h2>
        <h2>Movies</h2>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    );
  })
  
  return (
    <div>
      <h1>Actors Page</h1>
      {showActors}
    </div>
  );
};

export default Actors;
