import React from 'react';
import './Nav.css';

function App() {
  
  return (
    <nav className="navbar">

      <img src="./logo.jpeg" alt="" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

    </nav>

  );
}

export default App;
