import React from 'react';

function PartDesign({ children, reverse }) {
  return <div className={`part ${reverse && 'reverse'}`}>{children}</div>;

  //***CONDITIONAL STYLING

  // return (
  //   <div
  //     className='Part'
  //     style={{
  //       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //       color: reverse ? '#fff' : '#000',
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}

PartDesign.defaultProps = {
  reverse: false,
};

export default PartDesign;
