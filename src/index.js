import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';

const App = () => {
  const [latitude, errorMessage] = useLocation();

  let content;

  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  }

  return <div>App</div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
