import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/navbar/Nav';
import Carrousel from './components/carrousel/carrousel';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Carrousel />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsa? Temporibus, quasi! Tempora laborum qui, vel neque quaerat impedit ducimus!</p>
  </React.StrictMode>,
);
