import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="container-fluter">
      <div>
        <h2 className="txt-white">Directorio</h2>
      </div>

      <div className="footer-info">
        <div className="footerName">
          <h3>Dra. Carmen Fernández Cáceres </h3>
          <p>Directora General de CIJ</p>
          <p>cfernandez@cij.gob.mx </p>
        </div>
        <div className="footerName">
          <h3>Dr. Ángel h3rado García</h3>
          <p>Director de Operación y Patronatos</p>
          <p>aprado@cij.gob.mx</p>
        </div>
        <div className="footerName">
          <h3>Mtro. Bruno Diaz Negrete</h3>
          <p>Directivo Normativo</p>
          <p>direccion.normativa@cij.gob.mx</p>
        </div>
        <div className="footerName">
          <h3>Lic. Iván Rubén Rétiz Márquez</h3>
          <p>Director Administrativo</p>
          <p>ivan.retiz@cij.gob.mx</p>
        </div>
      </div>
    </div>
  );
}
