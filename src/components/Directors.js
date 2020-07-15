import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const showDirectors = directors.map(director => {
     return(
       <div>
         <h2>Name: {director.name}</h2>
         <h2>Movies:</h2>
         <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
         </ul>
       </div>
     )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {showDirectors}
    </div>
  );
}

export default Directors
