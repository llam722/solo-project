import React from 'react';
import ClockDesign from './shared/ClockDesign.jsx';
// import { useState } from 'react';

export function Clock({ item }) {
  // const [time, setTime] = useState(item.text);
  // const [location, setLocation] = useState(item.location);
  // const handleClick = () => {
  //   setTime((prev) => {
  //     console.log(prev)
  //     return prev + 'wow'
  //   })
  // }

  return (
    <ClockDesign>
      <div className="location-display">{item.location}</div>
      <div className="clock-display">{item.time}</div>
      {/* <button onClick={handleClick}>Clicky</button> */}
    </ClockDesign>
  );
}
