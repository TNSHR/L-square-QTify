import React from "react";
import "./Hero.css";
import Vlogo from "../../assests/vibrating-headphone 1.png"

const Hero =()=>{
      
    return(
        <div className="hero">
            <section className="inhero">
        <div className="text">
            <h1 className="text1">100 Thousand Songs, ad-free</h1>
            <h1 className="text2"> Over thousand podcast episodes</h1>

            
        
        
        </div>
        <div className="logo"><img src={Vlogo}   alt="Vibrating Headphone" /></div>
        
      </section>
        </div>
      
    );
}

export default Hero;