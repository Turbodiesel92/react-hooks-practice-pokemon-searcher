import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, sprites, hp }) {

const [cardToggle, setCardToggle] = useState(true)
  function handleToggle() {
    setCardToggle(!cardToggle)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" onClick = {handleToggle}
               src = {cardToggle ? sprites.front : sprites.back}
          />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp } hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
