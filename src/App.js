import React from 'react';
import MadeWithFunctionalComp from './MadeWithFuncionalComp/MadeWithFunctionalComp';
import MadeWithClassComponent from './MadeWithClassComponent/MadeWithClassComponent';

const App = () => {
  return (
    <div className="App">
      {/* made with class based components */}
      <h1>Made with class based Component</h1>
      <MadeWithClassComponent />

      {/* made with functional components */}
      <h1>made with Functional component</h1>
      <MadeWithFunctionalComp />
    </div>
  );
};

export default App;
