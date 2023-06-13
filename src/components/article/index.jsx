import React from 'react';
import './article.css';
import {getFirestore, doc, updateDoc} from "firebase/firestore"
import app from '../../data/firebase.js'
const firestoredb = getFirestore(app);

export default function Article({isEditable, title, subtitle, text,id}) {
 
  function editTitle(e){
  const title = e.target.textContent
  const docRef = doc(firestoredb,"articles", id)
  updateDoc(docRef, {title: title})
 }
 function editSubTitle(e){
  const subtitle = e.target.textContent
  const docRef = doc(firestoredb,"articles", id)
  updateDoc(docRef, {subtitle: subtitle})
 }
 function editText(e){
  const text = e.target.textContent
  const docRef = doc(firestoredb,"articles", id)
  updateDoc(docRef, {text: text})
 }
  return (
    <article >
      <div className="articleHead" >
         {  isEditable ? <h2 contentEditable onBlur={editTitle}> {title} </h2>  :( title ?  <h2 >{title}</h2> : null )}
      </div>
      <div id='about'></div>
      <div className="articleBottom">
        <div className="articleBottomContent" >
          {  isEditable ? <p contentEditable onBlur={editSubTitle}> {subtitle} </p>: <p >{subtitle}</p>}
          {  isEditable ? <p contentEditable onBlur={editText}> {text} </p>: <p >{text}</p>}
        </div>
      </div>
    </article>
  );
}
