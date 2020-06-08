import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SummerOrWinter from './SummerOrWinter';
import Spinner from './Spinner';

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
      return <SummerOrWinter latitude={this.state.latitude} />;
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please allow access to your location." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
