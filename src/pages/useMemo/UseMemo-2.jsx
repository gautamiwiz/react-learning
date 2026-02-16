import { useState, useMemo } from 'react';

const LIST = new Array(100000).fill().map((_, i) => i + 1);

export default function UseMemo2() {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredList = useMemo(() => {
    const filtered = LIST.filter((x) => x.toString().includes(query));

    return filtered;
  }, [query]);

  console.log(filteredList.length);

  //const filteredList = LIST.filter((x) => x.includes(query));

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
