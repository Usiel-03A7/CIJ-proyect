import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './carrousel.css';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import app from '../../data/firebase';

const db = getFirestore(app);

function Carrousel({ setNavColor }) {
  const carrouselRef = useRef();

  const [images, setImages] = useState([]);
  const [info, setInfo] = useState({ title: '', subtitle: '' });

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
    const getCarrousel = async () => {
      const snapshot = await getDocs(query(collection(db, 'images'), [where('id', '!=', 'info')]));
      const data = snapshot.docs.map((document) => ({ ...document.data(), id: document.id }));
      setImages(data);
    };
    getCarrousel();
    const getInfo = async () => {
      const docRef = doc(db, 'images', 'info');
      const snapshot = await getDoc(docRef);
      const data = snapshot.data();
      setInfo(data);
    };
    getInfo();
    return () => {
      interceptor.unobserve(carrouselRef.current);
    };
  }, []);

  const [currentImages, setCurrentImages] = useState({ current: 0, next: 1 });
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentImages((current) => {
        if (current.current === 5) {
          return { current: 0, next: 1 };
        }
        return { current: current.current + 1, next: current.next + 1 };
      });
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImages]);

  // function nextImg() {
  //   if (img > 6) {
  //     setImg(1);
  //   } else {
  //     setImg(img + 1);
  //   }
  // }

  return (
    <div className="containerCarrousel" id="carrousel" ref={carrouselRef}>
      {images.map((image, i) => (
        <img key={image.id} src={image?.display_url} alt="" className={currentImages.current === i ? 'visible' : ''} />
      ))}
      <div className="carrouselInfo">
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  setNavColor: PropTypes.func.isRequired,
};

export default Carrousel;
