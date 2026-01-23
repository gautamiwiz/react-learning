import { useState } from 'react';

export default function UseState2() {
  const [name, setName] = useState('John Doe');

  console.log('UseState 3 : Rendered - name:', name);

  return (
    <div>
      <button onClick={() => (name === 'John Doe' ? setName('Gautam Sharma') : setName('John Doe'))}>Use State 3 : {name}</button>
    </div>
  );
}
