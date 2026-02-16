import { useEffect, useRef, useState } from 'react';

export default function UseRef1() {
  const [name, setName] = useState('');

  //useRef is used to store mutable values that does not cause re-render when updated and also to access DOM elements directly
  //if you use a variable to store mutable value, it will be re-initialized on every render and you will lose the previous value
  // but with useRef, it will persist the value across renders

  //ref can also be used for HTML form elements... check the next example for that (use ref 2)

  const nameRef = useRef('Gautam');

  useEffect(() => {
    console.log(nameRef.current);
  }, []);

  useEffect(() => {
    console.log(' Name changed: ', name);
  }, [name]);

  return (
    <>
      <label>
        Name
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <button onClick={() => (nameRef.current = Math.random())}>Change ref</button>
      <br />
      <button onClick={() => console.log(nameRef.current)}>Log ref</button>
    </>
  );
}
