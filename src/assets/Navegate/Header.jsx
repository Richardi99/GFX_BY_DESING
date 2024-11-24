import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import logo_sin_fondo from '../img/GFX_sin_fondo.png';
import ButtonNav from '../component/ButtonNav';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener('scroll', handleScroll);

    // Cerrar el menú2 si se hace clic fuera de él
    const handleClickOutside = (event) => {
      // Verificar si el clic fue fuera del menú2
      if (navActive && !document.querySelector('.header-nav2').contains(event.target) && !document.querySelector('.ButtonNav').contains(event.target)) {
        setNavActive(false);
      }
    };

    // Asignar el manejador de clics al evento de documento
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navActive]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${navActive ? 'nav-padding' : ''}`}>
      <a href="#">
        <div className="header-logo">
          <img src={logo_sin_fondo} alt="GFX by design" />
        </div>
      </a>
      <nav className="header-nav">
        <ul>
          <li><a href="#" onClick={() => setNavActive(false)}>Home</a></li>
          <li><a href="#Us" onClick={() => setNavActive(false)}>Us</a></li>
          <li><a href="#Service" onClick={() => setNavActive(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setNavActive(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setNavActive(false)}>Drop me a message!</a></li>
        </ul>
      </nav>
      <ButtonNav onClick={toggleNav} isActive={navActive} />

      <nav className={`header-nav2 ${navActive ? 'activo' : ''}`}>
        <ul>
          <li><a href="#" onClick={() => setNavActive(false)}>Home</a></li>
          <li><a href="#Us" onClick={() => setNavActive(false)}>Us</a></li>
          <li><a href="#Service" onClick={() => setNavActive(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setNavActive(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setNavActive(false)}>Drop me a message!</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
