import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () =>{



    return (
      <>
        <header>
        <div className="site-header">
          <div className="site-header-contents">
            <div className="site-header-logo">
                <h1 className="site-header-logo">readMore</h1>
            </div>
            <LogoutButton>Sign out</LogoutButton>
          </div>
        </div>
      </header>
      <nav className="navbar-container">
        <div className="navbar-links">
          <ul className="menu">
            <li className="navbar-link-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-link-item">
              <NavLink to="/mybooks/all">
                My Books
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
}

export default NavBar;