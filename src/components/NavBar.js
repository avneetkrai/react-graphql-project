import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="nav-wrapper #673ab7 deep-purple">
          <Link to="/" className="brand-logo left-align">
            My Blog
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {!token ? (
              <>
                {' '}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>{' '}
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  {' '}
                  <button
                    className="#673ab7 btn"
                    onClick={() => {
                      localStorage.removeItem('token');
                      navigate('/login');
                    }}
                  >
                    {' '}
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
