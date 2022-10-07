import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/App.css';

const root = ReactDOM.createRoot(document.getElementById('blog-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
