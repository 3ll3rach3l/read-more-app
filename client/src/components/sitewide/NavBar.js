import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

const NavBar = () =>{



    return (
      <nav className="navbar-container">
        <div className="navbar-links">
          <ul className="menu">
            <li activeClassName="navbar-link-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li activeClassName="navbar-link-item">
              <NavLink to="/mybooks/all" activeClassName="navbar-link-item">
                My Books
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar;