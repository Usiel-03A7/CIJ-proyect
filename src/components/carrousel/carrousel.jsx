import React from 'react';
import './carrousel.css';

export default function Carrousel() {
  return (
    <div className="containerCarrousel">
      <figure className="deslizar">
        <p>Anterior</p>
        <img src="/imgCarrousel/img1.jpeg" alt="" />
        <p>Siguiente</p>
      </figure>
    </div>
  );
}
