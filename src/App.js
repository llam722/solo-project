import React, { Component, useState } from 'react';
import { Header } from './components/Header.jsx';
import PartsForm from './components/PartsForm.jsx';
import PartData from './data/PartData';
import { PartsList } from './components/PartsList.jsx';
import PartsPrice from './components/PartsPrice.jsx';

export function App() {
  const [part, setPart] = useState(PartData);
  const deleteFeedback = (id) => {
    if (window.confirm('Remove this item?')) {
      setPart(part.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1>Welcome {new Date().toDateString()}</h1>
        <p> The Time the Red Foxes will eat me today</p>
        <PartsForm/>
        <PartsPrice part={part} />
        <PartsList part={part} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
