import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="container-fluter">
      <div>
        <h2 className="txt-white">Directorio</h2>
      </div>

      <div className="footer-info">
        <h3 className="polololo">Dra. Carmen Fernández Cáceres Directora General de CIJContacto: cfernandez@cij.gob.mx </h3>
        <h3 className="polololo">Dr. Ángel Prado GarcíaDirector de Operación y Patronatosaprado@cij.gob.mx</h3>

        <h3 className="polololo">Mtro. Bruno Diaz NegreteDirectivo Normativodireccion.normativa@cij.gob.mx</h3>
        <h3 className="polololo">Lic. Iván Rubén Rétiz Márquez Director Administrativoivan.retiz@cij.gob.mx</h3>
      </div>
    </div>
  );
}
