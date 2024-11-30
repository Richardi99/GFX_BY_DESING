import React, { lazy, Suspense, useState, useEffect } from 'react';
// Lazy loading para MarcoDiv
const MarcoDiv = lazy(() => import('./MarcoDiv'));
import '../styles/Portfolio-item.css';

function PortfolioList({ products, visibleProducts }) {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

  useEffect(() => {
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
          onMouseMove={!isMobile ? handleMouseMove : null}
          onMouseEnter={!isMobile ? handleMouseEnter : null}
          onMouseLeave={!isMobile ? handleMouseLeave : null}
          onClick={handleClick}
        >
          {/* Suspense envuelve el componente lazy */}
          <Suspense fallback={<div>Loading...</div>}>
            <MarcoDiv>
              <div className="barr"></div>
              <img src={product.image} alt="producto1" />
            </MarcoDiv>
          </Suspense>

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
