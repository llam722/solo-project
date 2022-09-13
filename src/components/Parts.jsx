import React from 'react';
import PartDesign from './shared/PartDesign.jsx';
// import { useState } from 'react';

export function Part({ item }) {
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
      <div className="Part-display">{item.time}</div>
      {/* <button onClick={handleClick}>Clicky</button> */}
    </PartDesign>
  );
}
