import { useState, useEffect } from 'react';

export default function ChildTest() {
  const [name, setName] = useState('Tom');

  const [age, setAge] = useState(25);

  useEffect(() => {
    console.log('Renders everytime');
  });

  useEffect(() => {
    console.log('Renders only first time');
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Renders whenever name changes');
    document.title = name;
  }, [name]);

  return (
    <>
      <input type="text" placeholder="Enter something" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      Hello {name}, my age is {age}
    </>
  );
}
