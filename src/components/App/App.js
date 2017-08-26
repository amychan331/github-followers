import React, { Component } from 'react';
import './App.css';
import FormContainer from '../../containers/FormContainer/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Github Followers</h1>
          <p className="App-intro">Search for an Github account and its followers.</p>
        </header>
        <FormContainer />
      </div>
    );
  }
}

export default App;
