import { useEffect, useState } from 'react';

export default function UseEffectJsonAPI2() {
  const [data, setData] = useState(null);

  let [dataState, setDataState] = useState('Loading data...');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setData(data);
        setDataState('Data loaded successfully.');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setDataState('Error loading data.');
      });
  }, []);

  const posts = Array.isArray(data) ? data : data ? [data] : [];

  return (
    <>
      <h2>UseEffect JSON API Fetch Example - 2</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>{dataState}</p>
      )}
    </>
  );
}
