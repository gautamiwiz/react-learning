import { useState } from 'react';

import ChildTest from './ChildTest';

export default function UseEffect1() {
  const [showChild, setShowChild] = useState(true);

  const childComponent = showChild ? <ChildTest /> : null;

  return (
    <>
      <button onClick={() => setShowChild((s) => !s)}>Show/Hide input</button> <br />
      {childComponent}
    </>
  );
}
