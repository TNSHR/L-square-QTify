import React from "react";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../button/Button.jsx";
import SearchBar from "../searchbar/SearchBar.jsx";
import Qlogo from "../../assests/Group-3748.png"

const Navbar = () =>{
    return (
        
         <nav className="navbar">

<img src={Qlogo} alt="Company Logo" className="navbar-logo" />
             <SearchBar/>
            <Button/>


        
        </nav>
       
        
    )
}

export default Navbar;
