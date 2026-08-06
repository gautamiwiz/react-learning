import {useState} from 'react';
import {useOutletContext} from 'react-router';

export default function UseState1() {
  console.log('UseState A : Rendered');
  console.log('UseState B : Rendered');
  const [countA, setCountA] = useState(0);
  console.log('Count A', countA);
  const [countB, setCountB] = useState(0);
  console.log('Count B', countB);
  const outletVariable = useOutletContext();

  //there is an issue in the first one... you cannot pass the previous state like this.... check UseState-8.jsx

  return (
    <div>
      <h3>{outletVariable}</h3>
      <button id="gautam" onClick={() => setCountA(countA + 1)}>
        Use State Count A : {countA}
      </button>

      <button onClick={() => setCountB((c) => c + 1)}>
        Use State Count B : {countB}
      </button>
    </div>
  );
}
