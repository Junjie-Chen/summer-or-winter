import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    latitude: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => position,
      error => error
    );
  }

  render() {
    return <div>App</div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
