import { useState } from 'react';

//some slow function to calculate initial state that is outside the component
//note: everytime you update the state of of the name, this function will be called again and again

let someFunctionThatCalculatesInitialState = () => {
  console.log('Use state 5 : Rendered via a slow external function');
  return 'Gautam Sharmaaaa';
};

export default function UseState5() {
  //instead pass this as a call back function.. it will only run once compared to the UseState4
  const [name, setName] = useState(someFunctionThatCalculatesInitialState);

  let handleClick = () => {
    console.log('Setting state from UseState 5...');
    name === 'John Doe' ? setName('Gautam Sharma') : setName('John Doe');
  };

  return (
    <div>
      <button onClick={handleClick}>Use State 5 : {name}</button>
    </div>
  );
}
