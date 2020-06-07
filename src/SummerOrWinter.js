import React from 'react';

const getSummerOrWinter = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SummerOrWinter = () => {
  return <div>Summer Or Winter</div>;
};

export default SummerOrWinter;
