import React, { useEffect, useRef, useState } from 'react';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import app from '../../data/firebase';

import './edit_carrousel.css';
import { Tooltip } from 'antd';

const db = getFirestore(app);

export default function EditCarrousel() {
  const [img, setImg] = useState(1);
  const [info, setInfo] = useState({ title: '', subtitle: '' });

  const titleRef = useRef();
  const subtitleRef = useRef();

  function nextImg() {
    setImg((current) => {
      if (current === 6) {
        return 1;
      }
      return current + 1;
    });
  }
  function prevImg() {
    setImg((current) => {
      if (current === 1) {
        return 6;
      }
      return current - 1;
    });
  }
  // function deleteImg() {
  //   console.log('delete');
  // }
  function editImg() {
    console.log('edit');
  }

  const updateInfoTitle = async () => {
    const docRef = doc(db, 'images', 'info');
    await updateDoc(docRef, { title: titleRef.current.textContent });
  };

  const updateInfoSubtitle = async () => {
    const docRef = doc(db, 'images', 'info');
    await updateDoc(docRef, { subtitle: subtitleRef.current.textContent });
  };

  useEffect(() => {
    // const getCarrousel = async () => {
    //   const snapshot = await getDocs(query(collection(db, 'images'), [where('id', '!=', 'info')]));
    //   const data = snapshot.docs.map((document) => ({ ...document.data(), id: document.id }));
    //   setImg(data[0].img);
    // };
    // getCarrousel();
    const getInfo = async () => {
      const docRef = doc(db, 'images', 'info');
      const snapshot = await getDoc(docRef);
      const data = snapshot.data();
      setInfo(data);
    };
    getInfo();
  }, []);

  return (
    <div className="containerCarrousel">
      <img src={`/imgCarrousel/img${img}.jpeg`} alt="" />
      <div className="carrouselInfo">
        <h1 contentEditable onBlur={updateInfoTitle} ref={titleRef}>{info.title}</h1>
        <p
          contentEditable
          onBlur={updateInfoSubtitle}
          ref={subtitleRef}
        >
          {info.subtitle}
        </p>
      </div>
      <div className="editable">
        <Tooltip placement="top" title="Imagen anterior">
          <button onClick={prevImg} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L131.31,128ZM51.31,128l74.35-74.34a8,8,0,0,0-11.32-11.32l-80,80a8,8,0,0,0,0,11.32l80,80a8,8,0,0,0,11.32-11.32Z" /></svg>
          </button>
        </Tooltip>
        <Tooltip placement="top" title="Cargar nueva imagen">
          <button type="button" onClick={editImg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" />
            </svg>
          </button>
        </Tooltip>
        <Tooltip placement="top" title="Imagen siguiente">
          <button type="button" onClick={nextImg}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z" />
            </svg>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
