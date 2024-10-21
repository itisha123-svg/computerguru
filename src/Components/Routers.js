import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Photo from "./Pages/Photo";


export default function Routers() {
  return (
    <>
     
    <BrowserRouter>
     <Routes>
      <Route path= "/" element = {<Home/>} ></Route>
      <Route path = "/about" element = {<About/>} ></Route>
      <Route path= "/contact" element = {<Contact/>} ></Route>
      <Route path= "/courses" element = {<Courses/>} ></Route>
      <Route path="/photo" element ={<Photo/>} ></Route>



     </Routes>
   
    
    </BrowserRouter>
    </>
  )
}
