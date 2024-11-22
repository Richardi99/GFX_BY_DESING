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
      <a href="#">
        <div className="header-logo">
          <img src={logo_sin_fondo} alt="GFX by design" />
      </div>
        </a>
      <nav className='header-nav'>
        <ul >
          <li><a href='#'>Home</a></li>
          <li><a href='#Us'>Us</a></li>
          <li><a href='#Service'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a  href='#contact'>Drop me a message !</a></li>
        </ul>
      </nav>
      <ButtonNav/>

      <nav className='header-nav2'>
        <ul >
          <li><a href='#'>Home</a></li>
          <li><a href='#Us'>Us</a></li>
          <li><a href='#Service'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a  href='#contact'>Drop me a message !</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header