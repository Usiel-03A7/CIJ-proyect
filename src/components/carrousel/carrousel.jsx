import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './carrousel.css';

function Carrousel({ setNavColor }) {
  const carrouselRef = useRef();

  useEffect(() => {
    const interceptor = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setNavColor('transparent');
      } else {
        setNavColor('filled');
      }
    }, {});
    interceptor.observe(carrouselRef.current);
    return () => {
      interceptor.unobserve(carrouselRef.current);
    };
  }, []);

  const [img, setImg] = useState(1);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (img > 6) {
        setImg(1);
      } else {
        setImg(img + 1);
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [img]);

  return (
    <div className="containerCarrousel" id='carrousel' ref={carrouselRef}>
      <img src={`/imgCarrousel/img${img}.jpeg`} alt="" />
      <div className="carrouselInfo">
        <h1>Bienvenido</h1>
        <p>Centros de integracion Juvenil, A.C. CJI Colima</p>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  setNavColor: PropTypes.func.isRequired,
};

export default Carrousel;
