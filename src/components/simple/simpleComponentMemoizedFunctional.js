import React from 'react';
import style from './simpleComponent.module.css';


const SimpleComponentMemoizedFunctional = React.memo((props) => {
  
  return (
    <div className={style.box}>Soy el nuevo componente del tipo Memoized!</div>
  );
});

export default SimpleComponentMemoizedFunctional;
