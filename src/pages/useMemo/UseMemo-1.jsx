import { useState } from 'react';

const LIST = new Array(100000).fill().map((_, i) => i + 1);

export default function UseMemo1() {
  //use memo is for performance gains/optimization.
  // It is used to memoize the value of a function so that it is not re-evaluated on every render.
  // It is used to avoid expensive calculations on every render.
  // It is used to avoid re-rendering of child components when the parent component re-renders.
  // and the child component does not need to be re-rendered.

  //to simulate this, go to dev tools, performance tab and reduce the cpu to 6x slower
  //because it is filtering the data on every render, it is taking more time to render the component.
  //and hence the click on dark mode will also take time
  //in the next example use-memo-2, we will memoize the list....
  //this will not delay the dark mode

  //every time you toggle the darkmode, the components re-renders and the list is filtered again and again,
  // which is an expensive operation and hence it takes time to toggle the dark mode.
  // because of this, the dark mode toggle is also delayed.
  // to avoid this, we can use useMemo to memoize the filtered list and only re-evaluate it when the query changes.

  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredList = LIST.filter((x) => x.toString().includes(query));

  console.log(filteredList.length);

  return (
    <>
      <div
        style={{
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
        }}
      >
        <label>
          Query :
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <br />
        <input type="checkbox" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} /> Dark mode
      </div>
    </>
  );
}
