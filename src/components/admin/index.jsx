import { useEffect, useMemo, useState } from "react";
import Navbar from "../navbar/Nav";
import Carrousel from "../carrousel/carrousel";
import Footer from "../footer";
import Contactanos from "../contactanos";
import Avisos from "../avisos"
import Article from "../article"

import NavColorContext from '../../contexts/nav_color';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from '../../data/firebase.js'
const auth = getAuth(app);



export default function Admin() {

  const [navColor, setNavColor] = useState('trasnparent');
  const navColorMemo = useMemo(() => ({ navColor, setNavColor }), [navColor, setNavColor]);
 // Es un hook de la libreria React router que permite navegar en las rutas del proyecto
  const navigate = useNavigate();

  // se ejecuta al detactar un cambio en las dependencias del componenete
  // las dependencias puede ser variables y el array de dependencias es el segundo parametro del useEffect
  // el primer parametro es una funcion Callback que se ejecutara cuando estas dependencias cambie 
  // si el array se deja vacio significa que el callback se ejecutara solo una vez al renderizar el componente 

  useEffect(() => {





    
    if (!auth.currentUser) {
      // verifica si el usuario inicio sesion 
      // si no hay un usuario existente se regresa a raiz (home)
      navigate('/', {
        replace: true
      })
      return
    }
    // Cuando un usuario acceda correctamente, podrás obtener información acerca de él en el observador.
    // y escucha cambios en la sesion en caso de que se cierre o inicie session
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

      } else {
        navigate('/', {
          replace: true
        })
      }
    });
  }, [])
  function handdleLogOut (){
    auth.signOut()
  }
  return (
    <>
    {/* <Navbar /> */}
    <NavColorContext.Provider value={navColorMemo}>
      <Navbar />
      <Carrousel setNavColor={setNavColor} isEditable={true} />
    </NavColorContext.Provider>
    <Article />
    <Avisos />
    <Contactanos />
    <Footer />



      {/* <p>Admin jsjsjs</p>
      <button onClick={handdleLogOut}>Log out</button> */}
    </>
  )
}