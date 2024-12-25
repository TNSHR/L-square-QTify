import React from "react";
import "./searchBar.css";
import logo from "../../assests/Search-icon.svg"


const SearchBar = () => {
  return (
    <div className="container">
      <header>
      <form>
      <input className="input"
        type="text"
       placeholder= 'Search a album of your choice'
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
