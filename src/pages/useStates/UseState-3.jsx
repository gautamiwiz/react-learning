import {useState} from 'react';

export default function UseState2() {
  const [name, setName] = useState('John Doe');

  console.log('UseState 3 : Rendered - name:', name);

  return (
    <div>
      <button
        className="min-w-64 cursor-pointer rounded-md border border-blue-700 bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
        onClick={() =>
          setName((currentName) =>
            currentName === 'John Doe' ? 'Gautam Sharma' : 'John Doe',
          )
        }
      >
        Use State 3: {name}
      </button>
    </div>
  );
}
