import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';

class MadeWithClassComponent extends React.Component {
  render() {
    return (
      <AuthContextProvider>
        <ThemeContextProvider>
          <div className="container ui raised very padded text segment ">
            <Navbar />
            <TodoList />
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    );
  }
}

export default MadeWithClassComponent;
