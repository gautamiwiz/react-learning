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
      <div className="flex flex-wrap gap-3">
        <button
          id="gautam"
          className="min-w-56 cursor-pointer rounded-md border border-blue-700 bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
          onClick={() => setCountA(countA + 1)}
        >
          Use State Count A: {countA}
        </button>

        <button
          className="min-w-56 cursor-pointer rounded-md border border-emerald-700 bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:bg-emerald-800"
          onClick={() => setCountB((c) => c + 1)}
        >
          Use State Count B: {countB}
        </button>
      </div>
    </div>
  );
}
