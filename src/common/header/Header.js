import React from 'react'
import "./Header.css";
import "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="image"
       src = "movies-app\src\assets\image-logo.svg"
       alt="logo" />
    </div>  
  )
}

export default Header;