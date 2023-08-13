import React, { useEffect, useMemo, useState } from 'react';
import Carrousel from "../carrousel/carrousel";
import Footer from "../footer";
import Contactanos from "../contactanos";
import Avisos from "../avisos"
import Article from "../article"
import {getFirestore, collection, doc, setDoc, getDocs, onSnapshot} from "firebase/firestore"
// import NavColorContext from '../../contexts/nav_color';
import './admin.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from '../../data/firebase.js'
import EditCarrousel from '../carrousel/edit_carrousel';
const auth = getAuth(app);
const firestoredb = getFirestore(app);

export default function Admin() {
  const [articles, setArticles] = useState([])
  const [avisos, setAvisos] = useState([])
  const [navColor, setNavColor] = useState('trasnparent');
  const navColorMemo = useMemo(() => ({ navColor, setNavColor }), [navColor, setNavColor]);
 // Es un hook de la libreria React router que permite navegar en las rutas del proyecto
  const navigate = useNavigate();


  function handdleLogOut (){
    auth.signOut()
  }
  useEffect (()=>{
    onAuthStateChanged(auth, (user) => {
      if (!user) {
       navigate('/auth')
      } 
      // const uid = user.uid;
    });
  },[] )
  useEffect(()=>{
    const articlesRef = collection(firestoredb, "articles")
    getDocs(articlesRef)
    .then((snapshot)=>{

      const data = snapshot.docs.map((doc)=>{
        return {...doc.data(),id:doc.id}
      })
      setArticles(data)
        
    })
  }, [])

  useEffect(()=>{
    const avisosRef = collection(firestoredb, "avisos")
    // getDocs(avisosRef)
    // .then((snapshot)=>{
    //   const data = snapshot.docs.map((doc)=>{
    //     return {...doc.data(),id:doc.id}
    //   })
    //   setAvisos(data)
        
    // })
    
    const unsub = onSnapshot(avisosRef, (snapshot) => {
     const avisosDocuments = snapshot.docs.map(aviso => {
      return {...aviso.data(), id:aviso.id}
     })
     setAvisos(avisosDocuments)
    });
    return unsub;
  }, [])

  return (
    <>
      <EditCarrousel />
      <button className='logoutButton' onClick={handdleLogOut}>Guardar y salir</button>
      {articles.map((article, index)=><Article key={article.id} id={article.id} isEditable={true} title={article.title} subtitle={article.subtitle} text={article.text}/>)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }} id="anuncios">
        {avisos.map((aviso) => (
          <Avisos
            key={aviso.id}
            isEditable={true}
            id={aviso.id}
            subtitle={aviso.subtitle}
            text={aviso.text}
            img={aviso.img?.display_url}
          />
        ))}
      </div>
      {/* {...avisos.map((avisos, index)=><Avisos id={avisos.id} isEditable={true} subtitle={avisos.subtitle} text={avisos.text} img={avisos.img} />)} */}
    <Contactanos isEditable={true} />
    <Footer />

      {/* <p>Admin jsjsjs</p>
      <button onClick={handdleLogOut}>Log out</button> */}
    </>
  )
}