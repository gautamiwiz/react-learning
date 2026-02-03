import Navbar from './NavBar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <h1>React learning</h1>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Footer will come here</p>
      </footer>
    </>
  );
}
