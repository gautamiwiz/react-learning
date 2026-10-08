import {useState} from 'react';

export default function UseState2() {
  console.log('UseState 2 : Rendered');

  //initial state calculation function
  let someFunctionThatCalculatesInitialState = () => {
    console.log('Calculating initial state UseState 2...');
    return 2;
  };

  const [count, setCount] = useState(someFunctionThatCalculatesInitialState);
  //above line can also be
  // const [count, setCount] = useState(() => {
  //   console.log('Calculating initial state UseState 2...');
  //   return 5;
  // });

  console.log('Setting count from UseState 2... count outside = ', count);

  let setCountCallThisFunction = () => {
    setCount((c) => c + 1);
    console.log('Setting count from UseState 2... count inside = ', count);
  };

  return (
    <div>
      <button
        className="min-w-56 cursor-pointer rounded-md border border-blue-700 bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
        onClick={setCountCallThisFunction}
      >
        Use State type 2 - Count : {count}
      </button>
    </div>
  );
}
