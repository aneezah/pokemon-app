import React from 'react';
import "../styles/yourPokemon.css"
const YourPokemon = ({ pokemonTeam, viewPokemon,removePokemon }) => (
  <div className='yourPokemon'>
    <h2>Your Pokemon Team</h2>
    {pokemonTeam.length === 0 ? (
      <p>You have no Pokemon in your team.</p>
    ) : (
      pokemonTeam.map(pokemon => (
        <div className='list' key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <button onClick={() => viewPokemon(pokemon)}>View Details</button>
          <button onClick={() => removePokemon(pokemon)}>Remove Pokemon</button>
        </div>
      ))
    )}
  </div>
);

export default YourPokemon;
