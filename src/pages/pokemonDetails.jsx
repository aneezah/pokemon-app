// src/pages/DetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PokemonCard from './pokemonCard';
// import PokemonDetails from './ppokemonDetails';

const PokemonDetails = ({ addToTeam, removeFromTeam, team , isInTeam}) => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(response.data);
    };
    fetchPokemon();
  }, [name]);

  return pokemon ? (
    <PokemonCard
      pokemon={pokemon}
      addToTeam={addToTeam}
      removeFromTeam={removeFromTeam}
      team={team}
      isInTeam={ isInTeam}
    />
  ) : (
    <p>Loading...</p>
  );
};

export default PokemonDetails;
