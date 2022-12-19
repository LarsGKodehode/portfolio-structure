// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS Globals
import './styles/basic.css'
import './styles/palette.css'
import './styles/spacing.css'

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);