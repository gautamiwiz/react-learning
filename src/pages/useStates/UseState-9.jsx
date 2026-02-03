import { useState } from 'react';

export default function UseState1() {
  console.log('UseState 9 : Rendered');
  const [person, setPerson] = useState({ name: 'Tom1', age: 20 });

  function handleClick() {
    console.log('Setting state from UseState 9...');
    setPerson({ name: 'Gautam', age: 25 });
  }

  const [person2, setPerson2] = useState({ name: 'Tom2', age: 21 });

  function handleClick2() {
    console.log('Setting state from UseState 9...');
    setPerson2({ name: 'Gautam' }); // age will become undefined
  }

  const [person3, setPerson3] = useState({ name: 'Tom3', age: 21 });

  function handleClick3() {
    console.log('Setting state from UseState 9...');
    setPerson3((x) => {
      return { ...x, name: 'Gautam 2' };
    });
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>
          Use State type 9 - Name : {person.name}, Age : {person.age}
        </button>
      </div>
      <br />
      <div>
        <button onClick={handleClick2}>
          Use State type 9 - Name : {person2.name}, Age : {person2.age}
        </button>
      </div>
      <br />
      <div>
        <button onClick={handleClick3}>
          Use State type 9 - Name : {person3.name}, Age : {person3.age}
        </button>
      </div>
    </>
  );
}
