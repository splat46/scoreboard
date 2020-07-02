// src/components/Player/Player.js
import React from "react";

export default function Player(props) {
  return (
    <ul>
      <li className="player">
        <p>
          {props.name} {}
          score: {props.score}
        </p>
      </li>
    </ul>
  );
}
