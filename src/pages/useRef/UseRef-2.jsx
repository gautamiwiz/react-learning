import { useEffect, useRef, useState } from 'react';

export default function UseRef2() {
  const [name, setName] = useState('');

  const nameRef = useRef('');

  //the below cannot be used, because when the component renders for the first time, the input element is not yet
  // rendered and nameRef.current will be null, so you cannot call focus on it. This will throw an error.
  //nameRef.current.focus();

  useEffect(() => {
    //this can be used to focus the input element when the component mounts or when the name changes
    //use effect runs only after the HTML below is rendered....
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(nameRef.current.value);
  }, [name]);

  return (
    <>
      <label>
        Name
        <input ref={nameRef} type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
    </>
  );
}
