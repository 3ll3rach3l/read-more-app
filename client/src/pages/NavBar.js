import React, {useEffect, useState, useRef} from 'react';
import LogoutButton from '../components/auth/LogoutButton';
import {NavLink} from 'react-router-dom';

const NavBar = () =>{



    return (
      <nav className="navbar">
        <div className="navbar-logo-holder">
          <h1>readMore</h1>
        </div>
        <div className="navbar-link">
            {/* <Route path="/" component={HomePage} /> */}
            <NavLink to="/" activeClassName="navbar-link-item">Home</NavLink>
            <NavLink to="/mybooks/all" activeClassName="navbar-link-item">My Books</NavLink > 
        </div>
        <LogoutButton/>
      </nav>
    );
}

export default NavBar;