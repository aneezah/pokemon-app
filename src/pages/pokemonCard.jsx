import React,{useState} from 'react';
import "../styles/pokemonCard.css"
import {ProgressBar,Card} from "react-bootstrap"


function PokemonCard  ({ pokemon,pokemonTeam, addToTeam, removeFromTeam}) {
 
  // const isInTeam = pokemonTeam.some(p => p.id === pokemon.id);

  return (
    <div className="pokemonCard">
    <Card style={{backgroundColor:"lightGrey"}}className="Card">
    <Card.Header className="cardHeader">
      <h1>{pokemon.name}</h1>
      <img className="img" src={pokemon.sprite?.front_default}alt={pokemon.name} />
    </Card.Header>
    <Card.Body className="cardBody" >
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>abilities: {pokemon.abilities.map(type => type.ability.name).join(', ')}</p>
      <h5>Base Stats:</h5>
      {pokemon.stats.map((stat, key) => (
        <div key={key}>{stat.stat.name}
          <ProgressBar now={stat.base_stat} max={255} label={stat.base_stat}/>
        </div>
      ))}
       { !null? (
        <button className="remove" onClick={() => removeFromTeam(pokemon.id)}>Remove from Team</button>
      ) : (
        <button className="add" onClick={() => addToTeam(pokemon)}>Add to Team</button>
      )} 
     

    </Card.Body>
  </Card>
  </div>
  );
};

export default PokemonCard;
