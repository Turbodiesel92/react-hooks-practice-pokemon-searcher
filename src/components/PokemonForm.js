import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handlePost }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }

  function handleHpChange(event) {
    const value = event.target.value;
    setHp(value);
  }

  function handleFrontUrlChange(event) {
    const value = event.target.value;
    setFrontUrl(value);
  }

  function handleBackUrlChange(event) {
    const value = event.target.value;
    setBackUrl(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newPokemon = {
      name: name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((response) => handlePost(response));

    handlePost(newPokemon);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            value={name}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleNameChange}
          />

          <Form.Input
            value={hp}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleHpChange}
          />

          <Form.Input
            value={frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontUrlChange}
          />

          <Form.Input
            value={backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
