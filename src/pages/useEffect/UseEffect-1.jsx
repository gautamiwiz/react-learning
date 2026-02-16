import { useState } from 'react';
import { useOutletContext } from 'react-router';

import ChildTest from './ChildTest';

export default function UseEffect1() {
  const outletVariable = useOutletContext();
  const [showChild, setShowChild] = useState(true);

  const childComponent = showChild ? <ChildTest /> : null;

  return (
    <>
      <button onClick={() => setShowChild((s) => !s)}>Show/Hide input</button> <br />
      {childComponent}
      <p>
        Outlet Variable : <b>{outletVariable.name}</b>
      </p>
    </>
  );
}
