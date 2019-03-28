import React, { Component } from 'react';
import Travel from './components/Travel';
import Travels from './components/Travels';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <div className="destination">
         
         </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </header>
        <Travels/>
        
      </div>
    );
  }
}

export default App;
