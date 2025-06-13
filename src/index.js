import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();

// <BrowserRouter basename={process.env.PUBLIC_URL}> this for Github pages Deploy
