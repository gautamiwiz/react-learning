import {useState} from 'react';

//the initial state is an arrow function that returns the initial state value

export default function UseState6() {
  const [name, setName] = useState(() => {
    console.log('Use state 6 : Rendered via a slow function');
    return 'Gautam Sharmaaaa';
  });

  let handleClick = () => {
    console.log('Setting state from UseState 6...');
    name === 'John Doe' ? setName('Gautam Sharma') : setName('John Doe');
  };

  return (
    <div>
      <button
        className="min-w-64 cursor-pointer rounded-md border border-emerald-700 bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:bg-emerald-800"
        onClick={handleClick}
      >
        Use State 6: {name}
      </button>
    </div>
  );
}
