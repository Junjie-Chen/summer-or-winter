import React from 'react';

const summerOrWinterConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s chilly!',
    iconName: 'snowflake'
  }
};

const getSummerOrWinter = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SummerOrWinter = props => {
  const summerOrWinter = getSummerOrWinter(props.latitude, new Date().getMonth());

  return <div>Summer Or Winter</div>;
};

export default SummerOrWinter;
