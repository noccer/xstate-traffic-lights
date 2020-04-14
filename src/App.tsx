/** @jsx jsx */
import { jsx, css } from '@emotion/core';
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
        <p>
          <a
            css={css`
              color: white;
            `}
            href="https://github.com/noccer/xstate-traffic-lights"
            rel="noopener noreferrer"
            target="_blank"
          >
            <code>Source code</code>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
