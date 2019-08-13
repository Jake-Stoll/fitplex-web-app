import React from 'react';
// Import images
import fitplexLogo from './images/fitplex-logo.svg';
import userIcon from './images/user-icon.svg';
// Import CSS
import './Navbar.css';

const Navbar = (props) => {
  const { user } = props;
  return (
    <div className="web-navbar-container">
      <div className="web-navbar-column">
        <img src={fitplexLogo} alt="fitplex-icon" />
      </div>
      <div style={{ justifyContent: 'center' }} className="web-navbar-column">
        <p>Classes</p>
        <p>Studios</p>
        <p>Profile</p>
      </div>
      <div style={{ justifyContent: 'flex-end' }} className="web-navbar-column">
        {user ? (
          <div className="web-nav-user-container">
            <p>stja1102</p>
            <img src={userIcon} alt="user-icon" />
          </div>
        ) : (
            <p>Login</p>
          )
        }
      </div>

    </div>
  );
};

export default Navbar;
