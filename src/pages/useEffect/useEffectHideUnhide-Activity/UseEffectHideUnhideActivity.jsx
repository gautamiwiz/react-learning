import { Activity, useState } from 'react';

import ActivityChild from './ActivityChild';

export default function UseEffectHideUnhideActivity() {
  console.log('HideUnhide activity component Rendered..');

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <button onClick={toggleShow}>Toggle</button>
      <Activity mode={show ? 'visible' : 'hidden'}>
        <ActivityChild />
      </Activity>
    </>
  );
}
