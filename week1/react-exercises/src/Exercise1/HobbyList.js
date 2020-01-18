import React from "react";
import { Hobbies } from "./Hobbies";
export function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];

  return hobbies.map((hobby, i) => <Hobbies hobbies={hobby} key={i} />);
}
