import React from "react";
import "./searchBar.css";
import logo from "../../assests/Search-icon.svg"


const SearchBar = ({search}) => {
  return (
    <div className="container">
      <header>
      <form>
      <input className="input"
        type="text"
       placeholder= {search}
      />
       <button className="searchButton" type="submit"> 
        <img src={logo} alt="Search" className="button-icon" />
        </button>
      </form>
      </header>
      
      
    </div>
  );
};



export default SearchBar;
