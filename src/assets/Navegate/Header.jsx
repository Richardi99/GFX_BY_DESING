import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import logo_sin_fondo from '../img/GFX_sin_fondo.png'
import ButtonNav from '../component/ButtonNav'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  // Detectar el evento scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener('scroll',handleScroll);

    //limpiar Evento

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[]);

  

  return (
     
    <header className={`header center ${scrolled ? 'scrolled' : ''}`}>
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