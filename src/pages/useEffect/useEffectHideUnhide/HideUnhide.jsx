import { useEffect, useState } from 'react';

import SomeChild from './SomeChild';

export default function HideUnhide() {
  console.log('HideUnhide state based Component Rendered..');

  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  let showChild = show ? <SomeChild /> : null;

  useEffect(() => {
    console.log('UseEffect parent called..');
  }, []);

  return (
    <>
      <button onClick={toggleShow}>Toggle</button>
      {showChild}
    </>
  );
}
