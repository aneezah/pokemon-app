import "./App.css"
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Team from './pages/team';
import PokemonDetails from './pages/pokemonDetails';

const App = () => {
  const [pokemonTeam, setPokemonTeam] = useState(() => {
    const savedTeam = localStorage.getItem('PokemonTeam');
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  useEffect(() => {
    localStorage.setItem('PokemonTeam', JSON.stringify(pokemonTeam));
  }, [pokemonTeam]);

  const addToTeam = (pokemon) => {
    if (pokemonTeam.length < 6 && !pokemonTeam.some(p => p.id === pokemon.id)) {
      setPokemonTeam([...pokemonTeam, pokemon]);
      alert("Added to your team!")
    } else {
      alert('Your team is full! You can only have 6 Pokemon.');
    }
  };

  const removeFromTeam = (id) => {
    setPokemonTeam(pokemonTeam.filter((p) => p.id !== id));
  };
  const isInTeam = (pokemon)=>{
setPokemonTeam(!pokemonTeam.some(p => p.id === pokemon.id))  }
  const removePokemon = (pokemon) => {
    setPokemonTeam(pokemonTeam.filter((p) => p !== pokemon));
  };

  const viewPokemon = (pokemon) => {
    window.location.href = `/pokemon/${pokemon.name}`;
  };

  return (
    <div className="App">
       <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home addToTeam={addToTeam}  removeFromTeam={ removeFromTeam}/>} />
        <Route path="/pokemon/:name" element={<PokemonDetails addToTeam={addToTeam} removeFromTeam={removeFromTeam} pokemonTeam={pokemonTeam} isInTeam={ isInTeam}/>} />
        <Route path="/team" element={<Team pokemonTeam={pokemonTeam}  viewPokemon ={ viewPokemon } removePokemon={removePokemon}/>} />
      </Routes>
    </Router>
    </div>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home addToTeam={addToTeam}  removeFromTeam={ removeFromTeam}/>} />
    //     <Route path="/pokemon/:name" element={<PokemonDetails addToTeam={addToTeam} removeFromTeam={removeFromTeam} pokemonTeam={pokemonTeam}/>} />
    //     <Route path="/team" element={<Team pokemonTeam={pokemonTeam} removeFromTeam={removeFromTeam}  viewPokemon ={ viewPokemon } removePokemon={removePokemon}/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;