import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";



function App() {
  

  return (
    <>
    <div>
    <Navbar />
    <Hero />
   
    </div>
    </>)
    
}

export default App
