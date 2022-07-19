import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import List from "./components/List";
import Home from "./components/Home";
import Search from "./components/Search";
import {ContextProvider} from "./components/Context"



export default function App(){

    return(
<div>
    <ContextProvider>
        <Router>
            <nav>
                <Link style={{ textDecoration: 'none' }} to={"/"}>Home</Link>
                <Link style={{ textDecoration: 'none' }} to={'/Search'}>Search</Link>
                <Link style={{ textDecoration: 'none' }} to={"/List"}>List</Link>
            </nav>

            <div>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/Search' element= {<Search/>}/>
                <Route path='/List' element= {<List/>}/>
        </Routes>
            </div>


        </Router>
    </ContextProvider>

     <footer> 
        <span>WebSite created by Nicholas Bielecki. To leave a review email nicholas.j.bielecki@gmail.com </span>
        <span className="fontAwesome">
            <a href="https://github.com/NicholasBielecki/SchoolProjects" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/nicholas-bielecki-52030623a/" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i> </a>
            <a href="mailto:nicholas.j.bielecki@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2x"></i></a>
        </span>
      </footer>
   

</div>
    )
}



// return(
//     <div>
// <Router>
//         <nav className="navbar">
//             <Link to={"/"}>Home</Link>
//             <Link to={'/About'}>About</Link>
//             <Link to={"/Services"}>Services</Link>
//         </nav>

//   <div  className="mainContent">
//     <Routes>
//             <Route path='/' element= {<Home/>}/>
//             <Route path='/About' element= {<About/>}/>
//             <Route path='/Services' element= {<Services/>}/>
//     </Routes>

//   </div>
// </Router>

//   <footer> 
//     <span>123-456-7896</span>
//     <span>testemail@yahoo.com</span>
//     <span>123 Someplace <br/> town state zip </span>
//   </footer>

// </div>