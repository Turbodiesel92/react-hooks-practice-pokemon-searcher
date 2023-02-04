import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [ pokemonData, setPokemonData ] = useState([])
  const[search, setSearch] = useState('')

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(response => response.json())
  .then(pokeData => setPokemonData(pokeData))
}, [])

const pokemonFilteredArray = pokemonData.filter((poke) => {
  return poke.name.toLowerCase().includes(search.toLowerCase())
})

function handlePost(newPokemonObject) {
  setPokemonData([...pokemonData, newPokemonObject])
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handlePost = {handlePost} />
      <br />
      <Search search = {search} setSearch = {setSearch} />
      <br />
      <PokemonCollection pokemonData = { pokemonFilteredArray } />
    </Container>
  );
}

export default PokemonPage;
