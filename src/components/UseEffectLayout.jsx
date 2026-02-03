import { NavLink, Outlet } from 'react-router';

export default function UseEffectLayout() {
  return (
    <>
      <div className="flexGrid">
        <div>
          <NavLink to="/use-effect/type-1">Use Effect Type 1</NavLink>
        </div>
        <div>
          <NavLink to="/use-effect/type-2">Use Effect Type 2</NavLink>
        </div>
        <div>
          <NavLink to="/use-effect/type-3">Use Effect Type 3</NavLink>
        </div>
        <div>
          <NavLink to="/use-effect/type-4">Use Effect Type 4</NavLink>
        </div>
        <div>
          <NavLink to="/use-effect/type-5">Use Effect Type 5</NavLink>
        </div>
        <div>
          <NavLink to="/use-effect/type-6">Use Effect Type 6</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
