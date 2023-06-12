import React from 'react';
import NavColorContext from '../../contexts/nav_color';
import './Nav.css';

function Nav() {
  const openMenu = () => {
    location.href = '#menu';
  };

  return (
    <NavColorContext.Consumer>
      {({ navColor }) => (
        <nav className={['navbar', navColor].join(' ')}>
          <img src="./logo.jpeg" alt="" />
          <button className="nav-target" onClick={openMenu} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <ul className="nav_links" id="menu">
            <li>
              <a className="nav_link" href="#carrousel">Inicio</a>
            </li>
            <li>
              <a className="nav_link" href="#anuncios">Anuncios</a>
            </li>
            <li>
              <a className="nav_link" href="#about">Conocenos</a>
            </li>
            <li>
              <a className="nav_link" href="#contact">Contactanos</a>
            </li>
          </ul>
        </nav>
      )}
    </NavColorContext.Consumer>
  );
}

export default Nav;
