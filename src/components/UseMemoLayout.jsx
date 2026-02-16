import { NavLink, Outlet } from 'react-router';

export default function UseMemoLayout() {
  return (
    <>
      <div className="flexGrid">
        <div>
          <NavLink to="/use-memo/use-memo-type-1">Use Memo Type 1</NavLink>
        </div>
        <div>
          <NavLink to="/use-memo/use-memo-type-2">Use Memo Type 2</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
