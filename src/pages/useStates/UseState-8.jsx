import { useState } from 'react';

export default function UseState1() {
  console.log('UseState 8 : Rendered');
  const [name, setName] = useState('Tom');
  const [age, setAge] = useState(0);

  function handleClick() {
    console.log('Setting state from UseState 8...');
    setName('Gautam');
    //by using the set method as a function, we can get the current/latest state value
    setAge((currentAge) => {
      return currentAge + 2;
    });
    setAge((x) => {
      return x + 2;
    });
    setAge((y) => {
      return y + 1;
    });
  }

  return (
    <div>
      <h2 onClick={handleClick}>Use State 8 Name : {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
