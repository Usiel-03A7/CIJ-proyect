import app from '../../data/firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from 'react'
import './auth.css'

const auth = getAuth(app);

const errors = {
  'auth/invalid-email': 'Verifica el Email',
  'auth/wrong-password': 'Verifica la constraseña',
  'auth/user-not-found': 'Usuario no encontrado'
}


export default function Auth() {
  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)



  function showPasswd(e) {
    // passwordRef.current.type === 'text' ? passwordRef.current.type ='password' : passwordRef.current.type ='text';
    
    e.target.checked ? passwordRef.current.type = 'text': passwordRef.current.type = 'password'

  }


  useEffect(()=>{
    if(auth.currentUser){
      navigate('/admin')
    }
  },[])

  function handdleAuth() {

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        // Signed in
        navigate('/admin')
      })
      .catch((error) => {
        alert(errors[error.code]);
      });

  }

  return (
    <div className="auth">
      <img src="./logo.jpeg" alt="" />
      <h2>iniciar sesion</h2>
      <input type="text" ref={emailRef}  placeholder='Correo'/>
      <input type="password" ref={passwordRef} placeholder='Password' />

      <div className='hidden'>
        <input type="checkbox" name="hiddenPasswd" id="hiddenPasswd" onChange={showPasswd} />
        <label onChange={showPasswd} for='hiddenPasswd' >Mostrar contraseña</label>
      </div>
      <button className='button' onClick={handdleAuth} >Entrar</button>


    </div>
  )
}