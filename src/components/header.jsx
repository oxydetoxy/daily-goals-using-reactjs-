import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return <>
  
  <nav className="navbar">Daily Goals </nav>
  
  <div className="header">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contacts">Contact</Link>
    <Link to="/contacts/Ishant">User</Link>
   

  </div>
  
  
  
  
  </> ;



}

export default Header;
