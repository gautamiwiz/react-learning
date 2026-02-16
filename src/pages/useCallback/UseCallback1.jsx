import { useEffect, useState } from 'react';

export default function UseCallback1() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  //issue is every time the component re renders the function is getting recreated and in use effect
  // we are passing the function as dependency so it is getting called every time,
  // to avoid this we can use use callback to memoize the function and it will only get recreated when the dependencies change

  function printName() {
    console.log('name is : ', name);
  }

  useEffect(() => {
    console.log('in effect');
    printName();
  }, [printName]);

  return (
    <>
      <label>
        Name : <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age : <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      </label>
    </>
  );
}
