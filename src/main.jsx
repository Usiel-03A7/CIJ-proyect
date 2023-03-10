import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './components/wrapper';
import Article from './components/article';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper/>
    <Article />
    
  </React.StrictMode>,
);
