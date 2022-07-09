import { useState } from 'react';
import Protypes from 'prop-types';


export const CounterApp = ( { value } ) => {    
  
  const [ counter, setCounter ] = useState( value );

  // console.log(props);
  const handleAdd = () => { 
    // console.log('+1');
    // value = 1000;
    // setCounter( counter+1 );
    setCounter((c) => c+1);
  }

  const handRest = () => setCounter( counter-1 );

  const handReset = () => {
    setCounter (value);
    console.log(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handRest } > -1 </button>
      <button onClick={ handReset }> Reset </button>
    </>
  );
}

CounterApp.proTypes = {
  value: Protypes.number.isRequired,
}
