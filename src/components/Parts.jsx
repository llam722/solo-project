import { FaTimes } from 'react-icons/fa';
import React from 'react';
import PartDesign from './shared/PartDesign.jsx';
// import { useState } from 'react';

export function Part({ item, handleDelete }) {
  // const [time, setTime] = useState(item.text);
  // const [location, setLocation] = useState(item.location);
  // const handleClick = () => {
  //   setTime((prev) => {
  //     console.log(prev)
  //     return prev + 'wow'
  //   })
  // }

  return (
    <PartDesign>
      <div className="location-display">{item.location}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="Part-display">{item.value}</div>
      {/* <button onClick={handleClick}>Clicky</button> */}
    </PartDesign>
  );
}
