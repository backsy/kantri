import React, { Component } from 'react';
import './App.css';
import Avaleht from './components/Avaleht/avaleht';
import Festivalist from './components/Festivalist/festivalist';
import Kontakt from './components/Kontakt/kontakt';
import KuidasTulla from './components/KuidasTulla/kuidasTulla';
import OlulineTeada from './components/OlulineTeada/olulineTeada';
// import Programm from './components/Programm/programm';
import Suupillikool from './components/Suupillikool/suupillikool';
import Toetajad from './components/Toetajad/toetajad';
import Header from './components/Header/header';
import Piletid from './components/Piletid/piletid';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Avaleht />
        <Festivalist />
        {/* <Programm /> */}
        <Piletid />
        <Suupillikool />
        <OlulineTeada />
        <KuidasTulla />
        <Toetajad />
        <Kontakt />
      </div>
    );
  }
}

export default App;