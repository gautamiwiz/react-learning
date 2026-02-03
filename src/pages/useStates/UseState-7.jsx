import { useState } from 'react';

export default function UseState1() {
  const [name, setName] = useState('Tom');
  const [age, setAge] = useState(0);

  console.log('UseState 7 : Rendered');

  function handleClick() {
    console.log('Setting state from UseState 8...');
    setName('Gautam');

    console.log('Age before setState calls:', age);

    setAge(age + 1);
    console.log('Age before setState call 1:', age);

    setAge(age + 1);
    console.log('Age before setState call 2:', age);

    setAge(age + 1);
    console.log('Age before setState call 3:', age); // will set/increase the age only by 1 because React batches the state updates
  }

  return (
    <div>
      <h2 onClick={handleClick}>Use State 7 Name : {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
