import {useState} from 'react';

export default function UseState1() {
  const [name, setName] = useState('Tom');
  const [age, setAge] = useState(0);

  console.log('UseState 7 : Rendered');

  function handleClick() {
    console.log('Setting state from UseState 8...');
    setName('Gautam');

    console.log('Age before setState calls:', age);

    setAge(age + 1);
    console.log('Age before setState call 1:', age);

    setAge(age + 1);
    console.log('Age before setState call 2:', age);

    setAge(age + 1);
    console.log('Age before setState call 3:', age); // will set/increase the age only by 1 because React batches the state updates
  }

  return (
    <div className="flex flex-wrap gap-3">
      <h2
        className="cursor-pointer rounded-md border border-blue-200 bg-blue-50 px-5 py-3 text-lg font-semibold text-blue-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-100"
        onClick={handleClick}
      >
        Use State 7 Name: {name}
      </h2>
      <h2 className="rounded-md border border-emerald-200 bg-emerald-50 px-5 py-3 text-lg font-semibold text-emerald-900 shadow-sm">
        Age: {age}
      </h2>
    </div>
  );
}
