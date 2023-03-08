import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Carrousel from './components/carrousel/carrousel';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Carrousel />
  </React.StrictMode>,
);
