import React, { Component, useState } from 'react';
import { Header } from './components/Header.jsx';
// import { Part } from './components/Part.jsx';
import PartData from './data/PartData';
import { PartsList } from './components/PartsList.jsx';

export function App() {
  const [part, setPart] = useState(PartData);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome {new Date().toDateString()}</h1>
        <p> The Time the Red Foxes will eat me today</p>
        <PartsList Part={part} />
      </div>
    </>
  );
}
