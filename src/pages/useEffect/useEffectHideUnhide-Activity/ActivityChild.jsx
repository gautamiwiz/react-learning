import { useEffect, useState } from 'react';

export default function ActivityChild() {
  const [count, setCount] = useState(0);
  console.log('ActivityChild Component Rendered..');

  useEffect(() => {
    console.log('UseEffect child called..');
  }, []);

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
