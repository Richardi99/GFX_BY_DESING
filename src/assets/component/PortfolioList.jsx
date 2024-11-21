import React, { useState } from 'react';
import MarcoDiv from './MarcoDiv';
import '../styles/Portfolio-item.css';

function PortfolioList({ products, visibleProducts }) {
  // Estado para manejar la posición del círculo
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Obtener las coordenadas relativas del mouse dentro del div
    const cardRect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    setCirclePosition({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true); // Mostrar el círculo cuando el mouse entra
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Ocultar el círculo cuando el mouse sale
  };

  return (
    <div className="Portfolio-all">
      {products.slice(0, visibleProducts).map((product) => (
        <div
          key={product.id}
          className="Portfolio-item"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MarcoDiv>
            <div className="barr"></div>
            <img src={product.image} alt="producto1" />
          </MarcoDiv>

          {isHovered && (
            <div
              className="contact-circle"
              style={{
                left: `${circlePosition.x - 50}px`, // Ajustar la posición del círculo
                top: `${circlePosition.y - 50}px`,  // Ajustar la posición del círculo
                
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
