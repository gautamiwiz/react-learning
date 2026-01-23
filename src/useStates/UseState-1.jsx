import { useState } from 'react';

export default function UseState1() {
  console.log('UseState 1 : Rendered');
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Use State type 1 - Count : {count}</button>
    </div>
  );
}
