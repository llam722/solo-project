import React, { Component, useState } from 'react';
import { Header } from './components/Header.jsx';
// import { Clock } from './components/Clock.jsx';
import ClockData from './data/ClockData';
import { PartsList } from './components/PartsList.jsx';

export function App() {
  const [clock, setClock] = useState(ClockData);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome {new Date().toDateString()}</h1>
        <p> The Time the Red Foxes will eat me today</p>
        <PartsList clock={clock} />
      </div>
    </>
  );
}
