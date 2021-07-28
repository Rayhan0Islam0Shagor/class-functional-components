import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      background: '#d8ddf1',
      text: '#222',
    },
    darkTheme: {
      background: '#5c5c5c',
      text: '#fff',
    },
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
