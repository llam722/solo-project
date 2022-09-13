import React from 'react';
import { Part } from './Parts.jsx';

export function PartsList({ Part }) {
  // console.log(Part)
  if (!part || part.length === 0) {
    return <p>No Parts Added</p>;
  }
  return (
    <div className="parts-list">
      {part.map((item) => (
        <Part key={item.id} item={item} />
      ))}
    </div>
  );
}
