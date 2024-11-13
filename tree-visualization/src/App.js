import React from 'react';
import TreeMap from './TreeMap';
import CO2Estimation from './CO2Estimation';

function App() {
  return (
    <div className="App">
      <h1>Paulownia Tree Visualization & CO₂ Estimation</h1>
      <TreeMap />
      <CO2Estimation />
    </div>
  );
}

export default App;
