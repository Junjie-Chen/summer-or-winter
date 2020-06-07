import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SummerOrWinter from './SummerOrWinter';

class App extends Component {
  state = {
    latitude: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <SummerOrWinter />;
    }
  }

  render() {
    return <div>App</div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
