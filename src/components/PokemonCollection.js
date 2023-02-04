import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  const pokemonCards = pokemonData.map((pokemon) => {
    return (
      <PokemonCard
        name={pokemon.name}
        sprites={pokemon.sprites}
        hp={pokemon.hp}
        key={pokemon.id}
      />
    );
  });
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
