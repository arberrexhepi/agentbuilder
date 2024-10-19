import React from 'react';
import '../styles/global.css';
import {Link, NavLink, Navbar, Sidebar, SidebarGroup, SiteTitle} from '@services/navigation';

function Header() {
  return (
    <Navbar className="header bg-gray-900 text-cool">
      <NavLink className="header-link text-white" to="/">Home</NavLink>
      <NavLink className="header-link text-white" to="/about">About</NavLink>
      <NavLink className="header-link text-white" to="/teamq">Teams</NavLink>
    </Navbar>
  );
}

export default Header;
