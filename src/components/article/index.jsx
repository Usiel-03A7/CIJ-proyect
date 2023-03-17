import React from 'react';
import './article.css';

export default function Article() {
  return (
    <article >
      <div className="articleHead" >
        <h2>CIJ Cuenta con una red integrada por más de 8 mil voluntarios que anualmente atienden a poco más de 5 millones de personas a nivel nacional.</h2>
      </div>
      <div id='about'></div>
      <div className="articleBottom">
        <img src="" alt="" />
        <div className="articleBottomContent" >
          <p >¿Quienes somos?</p>
          
          <p>Centros de Integración Juvenil, A.C. (CIJ) es una asociación civil no lucrativa incorporada al Sector Salud fundada en 1969, con 53 años de experiencia en la atención integral del consumo de drogas, está conformada por una red de 120 unidades operativas en todo el país.</p>
        </div>
        <img src="" alt="" />
      </div>
    </article>
  );
}
