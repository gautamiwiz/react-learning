import {useState} from 'react';

export default function UseState1() {
  console.log('UseState 9 : Rendered');
  const [person, setPerson] = useState({name: 'Tom1', age: 20});

  function handleClick() {
    console.log('Setting state from UseState 9...');
    setPerson((prevData) => ({name: 'Gautam', age: prevData.age + 1}));
  }

  const [person2, setPerson2] = useState({name: 'Tom2', age: 21});

  function handleClick2() {
    console.log('Setting state from UseState 9...');
    setPerson2({name: 'Gautam'}); // age will become undefined
  }

  const [person3, setPerson3] = useState({name: 'Tom3', age: 21});

  function handleClick3() {
    console.log('Setting state from UseState 9...');
    setPerson3((x) => {
      return {...x, name: 'Gautam 2'};
    });
  }

  return (
    <>
      <div>
        <button
          className="w-full max-w-xl cursor-pointer rounded-md border border-blue-700 bg-blue-600 px-5 py-3 text-left font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800"
          onClick={handleClick}
        >
          Use State type 9 - Name : {person.name}, Age : {person.age}
        </button>
      </div>
      <br />
      <div>
        <button
          className="w-full max-w-xl cursor-pointer rounded-md border border-amber-700 bg-amber-600 px-5 py-3 text-left font-semibold text-white shadow-sm transition-colors hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 active:bg-amber-800"
          onClick={handleClick2}
        >
          Use State type 9 - Name : {person2.name}, Age : {person2.age}
        </button>
      </div>
      <br />
      <div>
        <button
          className="w-full max-w-xl cursor-pointer rounded-md border border-emerald-700 bg-emerald-600 px-5 py-3 text-left font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 active:bg-emerald-800"
          onClick={handleClick3}
        >
          Use State type 9 - Name : {person3.name}, Age : {person3.age}
        </button>
      </div>
    </>
  );
}
