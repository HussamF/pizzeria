import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
