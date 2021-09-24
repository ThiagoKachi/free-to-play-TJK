import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import { GameByIdProvider } from './context/GameByIdProvider';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <GameByIdProvider>
        <App />
      </GameByIdProvider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
