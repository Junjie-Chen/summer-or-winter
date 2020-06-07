import './SummerOrWinter.css';
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
  const {
    text,
    iconName
  } = summerOrWinterConfig[summerOrWinter];

  return (
    <div>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SummerOrWinter;
