// src/App.js
import React from 'react';
import DestinationList from './DestinationList';
import destinationsData from './destinations.json';

function App() {
  return (
    <div className="App">
      <h1>Virtual Travel Experience</h1>
      <DestinationList destinations={destinationsData} />
    </div>
  );
}

export default App;
