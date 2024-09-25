import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const location = useLocation(); // React Router hook to get the current path

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
