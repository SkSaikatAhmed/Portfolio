import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav className="navbar">
      <h1>Sk Saikat Ahmed</h1>
      <div className="menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
