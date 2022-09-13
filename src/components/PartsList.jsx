import React from 'react';
import { Clock } from './Clock.jsx';

export function PartsList({ clock }) {
  // console.log(clock)
  if (!clock || clock.length === 0) {
    return <p>No Clocks Added</p>;
  }
  return (
    <div className="parts-list">
      {clock.map((item) => (
        <Clock key={item.id} item={item} />
      ))}
    </div>
  );
}
