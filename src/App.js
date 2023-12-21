import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (
<>

<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/resume' element={<Resume/>}/>
<Route path='/contact' element={<Contact/>}/>

</Routes>
<Footer/>
</>

    )
}

export default App