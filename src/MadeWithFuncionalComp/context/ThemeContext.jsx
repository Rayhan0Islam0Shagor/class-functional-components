import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(false);
  const [lightTheme] = React.useState({
    background: '#d8ddf1',
    text: '#222',
  });
  const [darkTheme] = React.useState({
    background: '#5c5c5c',
    text: '#fff',
  });

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider
      value={{ lightTheme, darkTheme, theme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
