import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserContextProvider from './contexts/user.context';
import ThemeContextProvider from './contexts/theme.context';

const app = (
  <ThemeContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ThemeContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
