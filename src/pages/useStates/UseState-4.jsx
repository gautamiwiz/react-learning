import {useState} from 'react';

//some slow function to calculate initial state that is outside the component
//note: everytime you update the state of of the name, this function will be called again and again

let someFunctionThatCalculatesInitialState = () => {
  console.log('Use state 4 : External function called...');
  return 'Gautam Sharmaaaa';
};

export default function UseState4() {
  const [name, setName] = useState(someFunctionThatCalculatesInitialState());
  console.log('Current name :', name);
  let handleClick = () => {
    console.log('Setting state from UseState 4...');
    // console.log('Current name :', name);
    name === 'John Doe' ? setName('Gautam Sharma') : setName('John Doe');
  };

  return (
    <div>
      <button onClick={handleClick}>Use State 4 : {name}</button>
    </div>
  );
}
