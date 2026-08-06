import {useState} from 'react';

export default function UseState2() {
  console.log('UseState 2 : Rendered');

  //initial state calculation function
  let someFunctionThatCalculatesInitialState = () => {
    console.log('Calculating initial state UseState 2...');
    return 5;
  };

  const [count, setCount] = useState(someFunctionThatCalculatesInitialState);
  console.log('Setting count from UseState 2... count outside = ', count);
  let setCountCallThisFunction = () => {
    setCount((c) => c + 1);
    console.log('Setting count from UseState 2... count inside = ', count);
  };

  return (
    <div>
      <button onClick={setCountCallThisFunction}>
        Use State type 2 - Count : {count}
      </button>
    </div>
  );
}
