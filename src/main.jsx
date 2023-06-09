import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Auth from './components/auth';
import Home from './components/home';
import Admin from './components/admin';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
