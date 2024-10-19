
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', padding: 0 }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
          </li>
          <li>
            <Link to="/teams" style={{ textDecoration: 'none', color: '#333' }}>Teams</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
