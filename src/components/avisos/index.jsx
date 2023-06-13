import React, { useRef, useState } from "react"
import { getFirestore, doc, updateDoc } from "firebase/firestore"
import app from '../../data/firebase.js'
const firestoredb = getFirestore(app);
import './avisos.css'

export default function Avisos({ isEditable, subtitle, text, img, id }) {
  const inputRef = useRef()
  const [imgUrl , setImgUrl] = useState(img)
  async function uploadImg(e) {
    
    const image = e.target.files[0]
    

    const body = new FormData()
    body.append("image", image)

    const response = await fetch("https://api.imgbb.com/1/upload?key=b6b6cd7dba0f5d7b4611ce869e0dd514", {
      body,

      method: "POST"
    })
    const { data } = await response.json()
   
    const docRef = doc(firestoredb, "avisos", id)
    
    updateDoc(docRef, {img: data});

    setImgUrl(data.display_url);


  }

  function editSubTitle(e) {
    const subtitle = e.target.textContent
    const docRef = doc(firestoredb, "avisos", id)
    updateDoc(docRef, { subtitle: subtitle })
  }

  function editText(e) {
    const text = e.target.textContent
    const docRef = doc(firestoredb, "avisos", id)
    updateDoc(docRef, { text: text })
  }

  function isImgEmpy() {
    if (!isEditable && !imgUrl) {
      return null;
    }

    if (!imgUrl) {
      return (
        <div className="avisos_img">
          <input type="file" ref={inputRef} accept="image/png, image/jpeg" hidden />  
          <div
            className="uploadImg"
            onClick={()=>{
              inputRef.current.click()
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
            </svg>
            <p>Sube tu imagen</p>
          </div>
        </div>
      );
    }
    return (
      <div className="avisos_img">
      <input type="file" ref={inputRef} accept="image/png, image/jpeg" hidden  onChange={uploadImg}/>  
      <div
        className="editImg"
        onClick={()=>{
          inputRef.current.click()
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
        </svg>
        <p>Actualiza tu imagen</p>
      </div>
       <img src={imgUrl} alt="#" />
    </div>
    );
  }
  return (
    <div className="avisos">
      <div className="avisos_info">
        {isEditable
          ? (
            <h2 contentEditable onBlur={editSubTitle}>{subtitle}</h2>
          ) : <h2>{subtitle}</h2>}
        {isEditable ? <p contentEditable onBlur={editText}>{text}</p> : <p>{text}</p>}
      </div>
      {isImgEmpy()}
    </div>
  )
}