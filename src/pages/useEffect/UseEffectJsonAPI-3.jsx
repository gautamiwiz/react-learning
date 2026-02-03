import { useEffect, useState } from 'react';

export default function UseEffectJsonAPI3() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    setUsers([]);
    setError(null);

    const controller = new AbortController();
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(`Status code: ${res.status}`);
      })
      .then((data) => {
        setUsers(data);
        setStatus('fetched');
        setError(null);
        console.log('Fetched Data:', data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err);
        setUsers([]);
        setStatus('error');
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && (
        <>
          <h2>Error fetching users</h2>
          <p>{error.message}</p>
        </>
      )}
      {status === 'fetched' && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}, (user: {user.username})
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
