import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

class TodoList extends React.Component {
  // alternative of consumer
  //   static contextType = ThemeContext;

  render() {
    //   const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    //   const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <>
        <ThemeContext.Consumer>
          {(context) => {
            const { isDarkTheme, lightTheme, darkTheme, changeTheme } = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;

            return (
              <div
                style={{
                  backgroundColor: theme.background,
                  color: theme.text,
                  padding: '20px 0 0 0',
                  height: '150px',
                  textAlign: 'center',
                }}
              >
                <p className="item">plan the family trip</p>
                <p className="item">Go for shopping for dinner</p>
                <p className="item">Go for a walk</p>

                <button className="ui button primary" onClick={changeTheme}>
                  change theme
                </button>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default TodoList;
