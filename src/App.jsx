import React from "react"
import axios from "axios";
import {BrowserRouter , Routes , Route } from "react-router-dom" ;

import Portfolio from "./home";
import Projects from "./projects";

function App() {
  let mode = import.meta.env.MODE;
  if(mode == "development"){
    axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;

  }
  if(mode == "production"){
    axios.defaults.baseURL = location.origin;
    console.log("Server started");
  }

  return (
    <>
    
     <BrowserRouter>
     <Routes>
     <Route path='/' element={ <Portfolio /> } />
     <Route path='/more-projects' element={ <Projects /> } />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
