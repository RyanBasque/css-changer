import React, { Component } from 'react';

import Texter from '../components/texter/Texter';
import Viewer from '../components/viewer/Viewer';

import './App.css';

class App extends Component {

  state = {
    viewerText: 'Put something',
    textColor: null,
    borderRadius: 4,
    backgroundColor: "rgb(25, 22, 34)"
  };

  setViewerTextHandle = (event) => {
    this.setState({
      viewerText: event.target.value
    });
  };

  setTextColorHandle = (event) => {
    this.setState({
      textColor: event.target.value
    });
  };

  setBorderRadiusHandle = (event) => {
    this.setState({
      borderRadius: event.target.value
    })
  };

  setBackgroundColorHandle = (event) => {
    this.setState({
      backgroundColor: event.target.value
    })
  }

  render() {

    return (
      <div className="App" >
        <div className="container">
          <h2>CSS CHANGER</h2>
          <Viewer
            borderRadius={this.state.borderRadius}
            backgroundColor={this.state.backgroundColor}
            text={this.state.viewerText}
            color={this.state.textColor} />
          <Texter
            changeBackground={this.setBackgroundColorHandle}
            changeRadius={this.setBorderRadiusHandle}
            changeText={this.setViewerTextHandle}
            changeColor={this.setTextColorHandle} />
        </div>
      </div>
    );
  }
}

export default App;
