import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { latitude: null };

  render() {
    return <div>App</div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
