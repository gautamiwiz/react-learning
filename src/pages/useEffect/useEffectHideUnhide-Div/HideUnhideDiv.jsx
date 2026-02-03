import { useEffect, useState } from 'react';

export default function HideUnhideDiv() {
  console.log('HideUnhide div style Component Rendered..');

  const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);

  const toggleShow = () => setShow(!show);

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
      <button onClick={toggleShow}>Toggle</button>
      <div style={{ display: show ? 'block' : 'none' }}>
        <p onClick={() => setCount((c) => c + 1)}>I am child component with count : {count}</p>
      </div>
    </>
  );
}
