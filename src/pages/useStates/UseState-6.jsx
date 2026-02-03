import { useState } from 'react';

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
      <button onClick={handleClick}>Use State 6 : {name}</button>
    </div>
  );
}
