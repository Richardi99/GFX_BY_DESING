import React from 'react'
import '../styles/Header.css'
import logo_sin_fondo from '../img/GFX_sin_fondo.png'
import ButtonNav from '../component/ButtonNav'

function Header() {
  return (
    <header className='header center'>
      <div className="header-logo">
        <img src= {logo_sin_fondo} alt="GFX by desing" />
      </div>
      <nav className='header-nav'>
        <ul >
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Us</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a  href='#'>Drop me a message !</a></li>
        </ul>
      </nav>

      <ButtonNav/>

    </header>
  )
}

export default Header