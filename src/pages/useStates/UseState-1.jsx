import { useState } from 'react';
import { useOutletContext } from 'react-router';

export default function UseState1() {
  console.log('UseState 1 : Rendered');
  const [count, setCount] = useState(0);
  console.log('UseState 1 : Count', count);
  const [counter2, setCounter2] = useState(0);

  const outletVariable = useOutletContext();

  //there is an issue in the first one... you cannot pass the previous state like this.... check UseState-8.jsx

  return (
    <div>
      <h3>{outletVariable}</h3>
      <button id="gautam" onClick={() => setCount(count + 1)}>
        Use State type 1 - Count : {count}
      </button>

      <button onClick={() => setCounter2((c) => c + 1)}>Use State type 1 - Counter2 : {counter2}</button>
    </div>
  );
}
