import React from 'react';
import NavColorContext from '../../contexts/nav_color'
import './Nav.css';

function Nav() {
  return (
    <NavColorContext.Consumer>
      {({ navColor }) => (
        <nav className={['navbar', navColor].join(' ')} >
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
      )}

    </NavColorContext.Consumer>

  );
}

export default Nav;
