import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
var number = 10;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App number={number}/>
  </StrictMode>
);
