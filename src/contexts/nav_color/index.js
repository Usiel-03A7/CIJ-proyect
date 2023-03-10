import React from "react"
const  NavColorContext = React.createContext({
  navColor: 'transparent',
  setNavColor: (value) => {
    console.log('setNav ',setNavColor);
  }

}) 
export default NavColorContext;