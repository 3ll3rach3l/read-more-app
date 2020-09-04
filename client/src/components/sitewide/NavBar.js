import React from 'react';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import SimpleMenu from './SimpleMenu';


const NavBar = () =>{



    return (
      <>
        <div className="site-header-div">
          <header className="site-header">
            <div className="site-header-contents">
              <div className="site-header-logo">
                <h1 className="site-header-logo">readMore</h1>
              </div>
              <nav className="navbar-container">
                <div className="navbar-links">
                      <SimpleMenu/>
                </div>
              </nav>
              <LogoutButton>Sign out</LogoutButton>
            </div>
          </header>
        </div>
      </>
    );
}

export default NavBar;