import React from 'react';
import './App.css';
import {Friend} from "./exercise1/components/Friend";
import { DogGallery } from "./exercise2/components/DogGallery";
import {RandomJoke} from "./exercise3/components/RandomJoke";

function App() {
  return (
    <div className="App">
     <Friend/>
     <DogGallery/>
     <RandomJoke/>
    </div>
  );
}

export default App;
