// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS, import CSS that is available globally here
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