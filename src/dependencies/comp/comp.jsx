import React from 'react';

export const Comp = ({children}) => {
  return (<>
  <h1>Hola, Mundo!</h1>
    {children}
  </>);
};

export const HolaMundo = () => {
  return (
  <>
  <Comp>
    <h1>Hola, Martes!</h1>
    </Comp>
  </>
  )
};
