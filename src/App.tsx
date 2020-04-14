import React from 'react';
import './App.css';
import { TrafficLight } from './components/TrafficLight/TrafficLight';
import { LightType } from './state/types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TrafficLight type={LightType.traffic} />
        <p>
          <code>XState Traffic Lights</code>
        </p>
      </header>
    </div>
  );
}

export default App;
