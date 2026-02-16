import { NavLink, Outlet } from 'react-router';

export default function UseStateLayout() {
  return (
    <>
      <div className="flexGrid">
        <div>
          <NavLink to="/use-state/type-1">Use State Type 1</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-2">Use State Type 2</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-3">Use State Type 3</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-4">Use State Type 4</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-5">Use State Type 5</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-6">Use State Type 6</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-7">Use State Type 7</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-8">Use State Type 8</NavLink>
        </div>
        <div>
          <NavLink to="/use-state/type-9">Use State Type 9</NavLink>
        </div>
      </div>
      <p>Notice the "usestate" menu not getting highlighted when you click on any of the submenu items. Check navbar.jsx page</p>
      <Outlet context="Use State Layout context" />
    </>
  );
}
