import {useState} from 'react';

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
      <button
        className="min-w-64 cursor-pointer rounded-md border border-emerald-700 bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:bg-emerald-800"
        onClick={handleClick}
      >
        Use State 5: {name}
      </button>
    </div>
  );
}
