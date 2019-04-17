import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import style from './App.module.css';

import SimpleComponent from './components/simple/simpleComponent';
import SimpleComponentPure from './components/simple/simpleComponentPure';
import SimpleComponentFunctional from './components/simple/simpleComponentFunctional';
import SimpleComponentMemoizedFunctional from './components/simple/simpleComponentMemoizedFunctional';

class App extends Component {
  render() {
    return (
      <div className={style.box}>
        <div className="App">
          <header className="App-header">
            <p>Tipos de componentes</p>
            <img src={logo} className="App-logo" alt="logo" />
            <SimpleComponent/>
            <SimpleComponentPure/>
            <SimpleComponentFunctional/>
            <SimpleComponentMemoizedFunctional/>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
