import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './carrousel.css';

function Carrousel({ setNavColor, isEditable }) {
  const carrouselRef = useRef();

  useEffect(() => {
    const interceptor = new IntersectionObserver((entries) => {
      if (setNavColor) {
        if (entries[0].isIntersecting) {
          setNavColor('transparent');
        } else {
          setNavColor('filled');
        }
      }
    }, {});
    interceptor.observe(carrouselRef.current);
    return () => {
      interceptor.unobserve(carrouselRef.current);
    };
  }, []);

  const [img, setImg] = useState(1);
  if (!isEditable) {
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
  }

  function nextImg (){
    console.log('jgfds');
    if (img > 6) {
      setImg(1);
    } else {
      setImg(img + 1);
    }
  }

  return (
    <div className="containerCarrousel" id='carrousel' ref={carrouselRef}>
      <img src={`/imgCarrousel/img${img}.jpeg`} alt="" />
      <div className="carrouselInfo">
        <h1>Bienvenido</h1>
        <p>Centros de integracion Juvenil, A.C. CIJColima</p>
      </div>
      {isEditable ? <div className='editable'>
        <button onClick={nextImg}> {"<"} </button>
        <div>
          <button>borrar</button>
          <button>editar</button>
        </div>
        <button onClick={() => console.log('mahsdmahsbda')}> {">"} </button>
      </div>: null}
    </div>
  );
}

Carrousel.propTypes = {
  setNavColor: PropTypes.func.isRequired,
};

export default Carrousel;
