import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';
import SummerOrWinter from './SummerOrWinter';
import Spinner from './Spinner';

const App = () => {
  const [latitude, errorMessage] = useLocation();

  let content;

  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <SummerOrWinter latitude={latitude} />;
  } else {
    content = <Spinner message="Please allow access to your location." />;
  }

  return <div>{content}</div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
