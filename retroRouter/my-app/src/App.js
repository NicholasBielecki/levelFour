import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

export default function(){

  return(
    <div>
<Router>
        <nav className="navbar">
            <Link to={"/"}>Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={"/Services"}>Services</Link>
        </nav>

  <div  className="mainContent">
    <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/About' element= {<About/>}/>
            <Route path='/Services' element= {<Services/>}/>
    </Routes>

  </div>
</Router>

  <footer> 
    <span>123-456-7896</span>
    <span>testemail@yahoo.com</span>
    <span>123 Someplace <br/> town state zip </span>
  </footer>

</div>

   
  )
}