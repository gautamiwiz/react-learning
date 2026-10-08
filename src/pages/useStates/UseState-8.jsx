import {useState} from 'react';

export default function UseState1() {
  console.log('UseState 8 : Rendered');
  const [name, setName] = useState('Tom');
  const [age, setAge] = useState(0);

  function handleClick() {
    console.log('Setting state from UseState 8...');
    setName('Gautam');
    //by using the set method as a function, we can get the current/latest state value
    setAge((currentAge) => {
      return currentAge + 2;
    });
    setAge((x) => x + 2);
    setAge((y) => y + 1);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <h2
        className="cursor-pointer rounded-md border border-blue-200 bg-blue-50 px-5 py-3 text-lg font-semibold text-blue-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-100"
        onClick={handleClick}
      >
        Use State 8 Name: {name}
      </h2>
      <h2 className="rounded-md border border-emerald-200 bg-emerald-50 px-5 py-3 text-lg font-semibold text-emerald-900 shadow-sm">
        Age: {age}
      </h2>
    </div>
  );
}
