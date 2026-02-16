import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
        <NavLink to="/use-ref/">Use ref</NavLink>
      </div>
      <div>
        <NavLink to="/use-memo/">Use Memo</NavLink>
      </div>
      <div>
        <NavLink to="/use-callback/">Use Callback</NavLink>
      </div>
      <div>
        <NavLink to="/dynamic/">Dynamic Route</NavLink>
      </div>
      <div>
        <NavLink to="/simple/">Simple component</NavLink>
      </div>
      <div>
        <NavLink to="/multiple-cards/">Multiple Cards</NavLink>
      </div>
      <div>
        <NavLink to="/test/asdf/asdf">Test</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
