import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { theme, lightTheme, darkTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);

  const newTheme = theme ? darkTheme : lightTheme;

  return (
    <nav
      style={{
        color: newTheme.text,
        backgroundColor: newTheme.background,
        height: '120px',
        padding: '10px 0 0 0',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>CONTEXT API</h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={changeAuthStatus}
          className={isLoggedIn ? 'ui button primary' : 'ui button  green'}
        >
          {isLoggedIn ? 'User name' : 'log in'}
        </button>
      </div>

      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
