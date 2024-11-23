import React, { useState, useEffect } from 'react';
import MarcoDiv from './MarcoDiv';
import '../styles/Portfolio-item.css';

function PortfolioList({ products, visibleProducts }) {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

  useEffect(() => {
    // Listener para manejar el cambio de tamaño de ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1080);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const cardRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    setCirclePosition({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Función para manejar el clic y desplazar a la sección de contacto
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Portfolio-all">
      {products.slice(0, visibleProducts).map((product) => (
        <div
          key={product.id}
          className="Portfolio-item"
          onMouseMove={!isMobile ? handleMouseMove : null} // Desactiva el movimiento si es móvil
          onMouseEnter={!isMobile ? handleMouseEnter : null}
          onMouseLeave={!isMobile ? handleMouseLeave : null}
          onClick={handleClick} // Agrega el evento de clic
        >
          <MarcoDiv>
            <div className="barr"></div>
            <img src={product.image} alt="producto1" />
          </MarcoDiv>

          {isHovered && !isMobile && (
            <div
              className="contact-circle"
              style={{
                left: `${circlePosition.x - 50}px`,
                top: `${circlePosition.y - 50}px`,
              }}
            >
              <p>Contact US</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PortfolioList;
