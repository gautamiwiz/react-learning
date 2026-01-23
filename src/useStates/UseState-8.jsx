import { useState } from 'react';

export default function UseState1() {
  console.log('UseState 8 : Rendered');
  const [name, setName] = useState('Tom');
  const [age, setAge] = useState(0);

  function handleClick() {
    console.log('Setting state from UseState 8...');
    setName('Gautam');
    setAge(age + 1);
    setAge(age + 1); // will set/increase the age only by 1 because React batches the state updates
  }

  return (
    <div>
      <h2 onClick={handleClick}>Use State 8 Name : {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
