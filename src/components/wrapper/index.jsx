import React, {useState} from "react"
import NavColorContext from "../../contexts/nav_color"
import Nav from "../navbar/Nav";
import Carrousel from "../carrousel/carrousel";
function Wrapper(){
  const  [navColor, setNavColor] = useState('trasnparent')
  return(
    <NavColorContext.Provider value={{navColor,setNavColor}}>
      <Nav />
      <Carrousel setNavColor={setNavColor}/>
    </NavColorContext.Provider>

  )
}
export default Wrapper;