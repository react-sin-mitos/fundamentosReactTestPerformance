import React, { PureComponent } from 'react';
import style from './simpleComponent.module.css';


class SimpleComponentPure extends PureComponent {
  
  
  render() {
    return (
      <div className={style.box}>Soy un componente Puro!</div>
    );
  }
}

export default SimpleComponentPure;
