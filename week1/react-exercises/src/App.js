import React from 'react';
import './App.css';
import {HobbyList} from './Exercise1/HobbyList';
import {Guarantee} from './Exercise2/Guarantee';
import Counter from './Exercise3/Counter';

function App() {
  return (
    <div className="App">
      <HobbyList/>
      <Guarantee/>
      <Counter/>
    </div>
  );
}

export default App;
