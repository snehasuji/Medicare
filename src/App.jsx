import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import { Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Homed from './assets/Components/Home'
import Aboutd from './assets/Components/About'
import Booking from './assets/Components/Booking'
import Doctord from './assets/Components/Doctor'
import Departmentd from './assets/Components/Department'
import Contact from './assets/Components/Contactus'
// import Navbard from './assets/Components/Navbar'
import Footerd from './assets/Components/Footer'
import Navbard from './assets/Components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbard/>
    <Routes>
      <Route path="/" element={<Homed/>} />
      <Route path="/about" element={<Aboutd/>} />
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/doctor" element={<Doctord/>}/>
      <Route path="/department" element={<Departmentd/>}/>
      <Route path="/contactus" element={<Contact/>}/>

    </Routes>
    <Footerd/>

{/* <Homed/> */}
{/* <Navbard/> */}
      
      
    </>
  );
}

export default App;
