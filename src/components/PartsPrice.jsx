import React from 'react';

function PartsPrice({ part }) {
  // console.log(part);
  let total = part.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return (
    <div className="parts-price">
      <h4>{part.length} Items </h4>
      <h4>Total Price: ${isNaN(total) ? 0 : total}</h4>
    </div>
  );
}
export default PartsPrice;
