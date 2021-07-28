import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TodoList = () => {
  const { theme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);

  const newTheme = theme ? darkTheme : lightTheme;

  return (
    <>
      <div
        style={{
          backgroundColor: newTheme.background,
          color: newTheme.text,
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
    </>
  );
};

export default TodoList;
