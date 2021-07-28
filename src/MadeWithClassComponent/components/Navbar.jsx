import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <AuthContext.Consumer>
          {(authContext) => {
            return (
              <ThemeContext.Consumer>
                {(themeContext) => {
                  const { isDarkTheme, lightTheme, darkTheme } = themeContext;
                  const { isLoggedIn, changeAuthStatus } = authContext;
                  const theme = isDarkTheme ? darkTheme : lightTheme;

                  return (
                    <nav
                      style={{
                        color: theme.text,
                        backgroundColor: theme.background,
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
                          className={
                            isLoggedIn
                              ? 'ui button primary'
                              : 'ui button  green'
                          }
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
                }}
              </ThemeContext.Consumer>
            );
          }}
        </AuthContext.Consumer>
      </>
    );
  }
}

export default Navbar;
