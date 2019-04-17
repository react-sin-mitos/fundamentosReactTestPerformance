import React, { Component } from 'react';
import style from './simpleComponent.module.css';

class SimpleComponent extends Component {
  
  
  render() {
    return (
      <div className={style.box}>Soy un componente!</div>
    );
  }
}

export default  SimpleComponent;
