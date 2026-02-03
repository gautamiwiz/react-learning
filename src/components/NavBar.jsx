import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/use-state/" end>
          UseState
        </NavLink>
      </div>
      <div>
        <NavLink to="/use-effect/">UseEffect</NavLink>
      </div>
      <div>
        <NavLink to="/todolist">To do list</NavLink>
      </div>
      <div>
        <NavLink to="/dynamic/">Dynamic Route</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
