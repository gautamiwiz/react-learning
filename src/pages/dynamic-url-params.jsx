import users from '../users.json';
import { Link, NavLink, Outlet } from 'react-router';
import DynamicUrlParamsChildren from './DynamicUrlParamsChildren';

export default function DynamicUrlParams() {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* <NavLink to={`/dynamic/${user.id}`}>{user.name}</NavLink> */}
            <Link to={`/dynamic/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <DynamicUrlParamsChildren />
      {/* <Outlet /> */}
    </>
  );
}
