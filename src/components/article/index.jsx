import React from 'react';
import './article.css';
import { getFirestore, doc, updateDoc, addDoc, collection } from "firebase/firestore"
import app from '../../data/firebase.js'
const firestoredb = getFirestore(app);

export default function Article({ isEditable, title, subtitle, text, id }) {

  function editTitle(e) {
    const title = e.target.textContent
    const docRef = doc(firestoredb, "articles", id)
    updateDoc(docRef, { title: title })
  }
  function editSubTitle(e) {
    const subtitle = e.target.textContent
    const docRef = doc(firestoredb, "articles", id)
    updateDoc(docRef, { subtitle: subtitle })
  }
  function editText(e) {
    const text = e.target.textContent
    const docRef = doc(firestoredb, "articles", id)
    updateDoc(docRef, { text: text })
  }
  function addArticle() {
    addDoc(collection(firestoredb, "avisos"), {
      img:{},
      subtitle: "TITULO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }) 
    
  }

  return (
    <article >
      <div className="articleHead" >
        {isEditable ? <h2 contentEditable onBlur={editTitle}> {title} </h2> : (title ? <h2 >{title}</h2> : null)}
      </div>
      <div id='about'></div>
      <div className="articleBottom">
        <div className="articleBottomContent" >
          {isEditable ? <p contentEditable onBlur={editSubTitle}> {subtitle} </p> : <p >{subtitle}</p>}
          {isEditable ? <p contentEditable onBlur={editText}> {text} </p> : <p >{text}</p>}
        </div>
      </div>
     {isEditable ? (<button className='buttonAdd' onClick={addArticle}>Agregar</button> ): null}
      
    </article>
  );
}
