import React from 'react';

function ClockDesign({ children, reverse }) {
  return <div className={`clock ${reverse && 'reverse'}`}>{children}</div>;

  //***CONDITIONAL STYLING

  // return (
  //   <div
  //     className='clock'
  //     style={{
  //       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //       color: reverse ? '#fff' : '#000',
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}

ClockDesign.defaultProps = {
  reverse: false,
};

export default ClockDesign;
