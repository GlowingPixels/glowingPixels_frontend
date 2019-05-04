import React from 'react';
import MainPage from './containers/MainPage/MainPage';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
        <div>
          <MainPage />
        </div>
      </HashRouter>  
  );
}

export default App;
