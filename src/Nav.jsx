import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // create a navbar component  
   <div className='navbar'>
    <img src="./logo.jpeg" alt="" />
    <ul>
      <li>
        <a href='#'>Home</a>
      </li>
      <li>
        <a href='#'>About</a>
      </li>
      <li>
        <a href='#'>Contact</a>
      </li>
    </ul>

   </div>

  )
}

export default App
