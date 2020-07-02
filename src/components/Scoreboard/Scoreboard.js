// src/components/Scoreboard.js
import React, { useState } from "react";
import Player from "../Player/Player";

function compare_score(player_a, player_b) {
  console.log("Test player B", player_b);
  return player_b.score - player_a.score;
}
const compare_name = (a, b) => a.name.localeCompare(b.name);

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"
  console.log("sortby:", sort_by);

  const sortFunction = sort_by === "score" ? compare_score : compare_name;

  // first "copy" the array
  const players_copy = [...players];
  // then sort it with the `compare_score` callback function
  console.log("text players copy", players_copy);
  const players_sorted = players_copy.sort(sortFunction);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <h1>Scoreboard</h1>
      <p>Player's scores:</p>
      {players_sorted.map((player) => (
        <Player key={player.id} name={player.name} score={player.score} />
      ))}
      [TODO: add player form]
    </div>
  );
}
