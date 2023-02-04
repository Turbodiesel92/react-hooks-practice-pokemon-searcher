import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pokemonData, setPokemonData ] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(response => response.json())
  .then(pokeData => setPokemonData(pokeData))
}, [])



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonData = { pokemonData } />
    </Container>
  );
}

export default PokemonPage;
