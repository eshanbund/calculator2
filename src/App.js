import React, { Component } from 'react';
import logo from './logo.svg';
import styles from  './App.module.css';

import Numpad from './components/Numpad/Numpad';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>

          <Numpad/>
          
      </div>
    );
  }
}

export default App;
