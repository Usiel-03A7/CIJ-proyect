import React, { useState, useEffect } from 'react';
import './carrousel.css';

export default function Carrousel() {
  const [img, setImg] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
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
    <div className="containerCarrousel">
      <figure className="deslizar">
        <img src={`/imgCarrousel/img${img}.jpeg`} alt="" />
      </figure>
    </div>
  );
}
