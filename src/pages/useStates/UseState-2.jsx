import { useState } from 'react';

export default function UseState2() {
  console.log('UseState 2 : Rendered');

  //initial state calculation function
  let someFunctionThatCalculatesInitialState = () => {
    console.log('Calculating initial state UseState 2...');
    return 0;
  };

  const [count, setCount] = useState(someFunctionThatCalculatesInitialState);

  let setCountCallThisFunction = () => {
    console.log('Setting count from UseState 2...');
    setCount((c) => c + 1);
  };

  return (
    <div>
      <button onClick={setCountCallThisFunction}>Use State type 2 - Count : {count}</button>
    </div>
  );
}
