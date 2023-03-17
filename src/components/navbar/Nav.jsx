import React from 'react';
import NavColorContext from '../../contexts/nav_color';
import './Nav.css';

function Nav() {
  return (
    <NavColorContext.Consumer>
      {({ navColor }) => (
        <nav className={['navbar', navColor].join(' ')}>
          <img src="./logo.jpeg" alt="" />
          <a href="#menu" className='nav-target'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </a>
          <ul className='nav_links' id='menu'>
            <li>
              <a className='nav_link' href="#home">Anuncios</a>
            </li>
            <li>
              <a className='nav_link' href="#about">Conocenos</a>
            </li>
            <li>
              <a className='nav_link' href="#contact">Contactanos</a>
            </li>
          </ul>
        </nav>
      )}
    </NavColorContext.Consumer>
  );
}

export default Nav;
