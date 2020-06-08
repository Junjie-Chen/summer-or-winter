import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';

const App = () => {
  const [latitude, errorMessage] = useLocation();

  return <div>App</div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
