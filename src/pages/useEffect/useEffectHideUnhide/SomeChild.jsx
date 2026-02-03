import { useEffect, useState } from 'react';

export default function SomeChild() {
  const [count, setCount] = useState(0);
  console.log('SomeChild Component Rendered..');

  useEffect(() => {
    console.log('UseEffect child called..');
  }, []);

  // useEffect(() => {
  //   document.addEventListener('click', () => {
  //     console.log('Document clicked');
  //   });
  // }, []);

  // we should remove the event listner on unmount

  function handleClick() {
    console.log('Document clicked');
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <p onClick={() => setCount((c) => c + 1)}>I am child component, count : {count}</p>
    </>
  );
}
