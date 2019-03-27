import React, { Component } from 'react';
import Travel from './components/Travel'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <div className="destination1">
         
         </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </header>
        <Travel destination="Genosis" country="systeme alpha" photo="https://i.skyrock.net/4200/69794200/pics/2803846991_small_1.jpg" distance="2000 km"/>
        <Travel destination="Vulcain" country="systeme beta" photo="https://vignette.wikia.nocookie.net/fr.starwars/images/d/d1/Hoth.jpg/revision/latest?cb=20150220140638" distance="3000 km"/>
      </div>
    );
  }
}

export default App;
