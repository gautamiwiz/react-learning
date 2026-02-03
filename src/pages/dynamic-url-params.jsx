import users from '../users.json';
import { Link, Outlet } from 'react-router';

export default function DynamicUrlParams() {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/dynamic/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
