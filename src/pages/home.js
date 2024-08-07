import React, { useState } from 'react';
import "../styles/home.css"
import axios from 'axios';
import {ProgressBar,Card} from "react-bootstrap"

const Home = ({ addToTeam, removeFromTeam }) => {
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState('');

  const fetchRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(response.data);
  };

  const fetchPokemonByName = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      setPokemon(response.data);
    } catch {
      alert('Pokemon not found');
    }
  };

  return (
    <div className='home'>
      <h1>POKEMON APP</h1>
    <div className="homeBody">
      <div>
        <button onClick={fetchRandomPokemon} className="random">Search for a Random Pokemon</button>
      </div>
      <div className="search">
        {/* <BiSearch className="searchIcon"/> */}
        <input type="text" className="searchInput" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Pokemon Name"/>
        <button onClick={fetchPokemonByName} className="searchBtn">Search</button>
      </div>
    </div>
   
    {pokemon&&(
      <div>
      <Card style={{backgroundColor:"lightGrey"}}className="Card">
      <Card.Header>
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
         { (
         null
        ) ? (
          <button className="remove" onClick={() => removeFromTeam(pokemon.id)}>Remove from Team</button>
        ):<button className="add" onClick={() => addToTeam(pokemon)}>Add to Team</button>} 
      </Card.Body>
    </Card>
    </div> 
    )}
   </div>
  );
};

export default Home;
