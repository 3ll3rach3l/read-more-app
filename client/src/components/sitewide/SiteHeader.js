import React from 'react';
import LogoutButton from '../auth/LogoutButton';


const SiteHeader =() => {

    return (
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
    );
}

export default SiteHeader;