import React from 'react';
import AppWithRouterAccess from './Routes/AppWithRouterAccess';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWithRouterAccess />
      </BrowserRouter>
    </>
  );
}

export default App;
