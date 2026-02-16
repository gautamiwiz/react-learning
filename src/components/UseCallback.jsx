import { NavLink, Outlet } from 'react-router';

export default function UseCallbackLayout() {
  return (
    <>
      <div className="flexGrid">
        <div>
          <NavLink to="/use-callback/use-callback-type-1">Use Callback Type 1</NavLink>
        </div>
        <div>
          <NavLink to="/use-callback/use-callback-type-2">Use Callback Type 2</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
