import { NavLink, Outlet } from 'react-router';

export default function UseRefLayout() {
  return (
    <>
      <div className="flexGrid">
        <div>
          <NavLink to="/use-ref/use-ref-type-1">Use Ref Type 1</NavLink>
        </div>
        <div>
          <NavLink to="/use-ref/use-ref-type-2">Use Ref Type 2</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
