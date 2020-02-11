  
import React from "react";

export function Button({ getDogPhoto }) {
  return <button onClick={getDogPhoto}>Get a dog!</button>;
}