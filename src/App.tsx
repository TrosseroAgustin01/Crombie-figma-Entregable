//import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import Navbar from './Components/Navbar';
import Principal from './Components/Principal';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <br />
    <Principal/>
    </>
  )
}

export default App