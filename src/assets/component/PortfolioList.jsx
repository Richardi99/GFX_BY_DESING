import React, { lazy, Suspense, useState, useEffect } from 'react';
// Lazy loading para MarcoDiv
const MarcoDiv = lazy(() => import('./MarcoDiv'));
import '../styles/Portfolio-item.css';

function PortfolioList({ products, visibleProducts }) {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);
  const [modalData, setModalData] = useState({ isOpen: false, media: '', isVideo: false });

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

  const handleClick = (media, isVideo) => {
    setModalData({ isOpen: true, media, isVideo });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, media: '', isVideo: false });
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
          onClick={() => handleClick(product.image, product.image.endsWith('.mp4'))}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <MarcoDiv>
              <div className="barr"></div>
              {product.image.endsWith('.mp4') ? (
                <video src={product.image} alt={product.alt} autoPlay loop muted />
              ) : (
                <img src={product.image} alt={product.alt} loading="lazy" />
              )}
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

      {/* Modal */}
      {modalData.isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {modalData.isVideo ? (
              <video src={modalData.media} controls autoPlay loop />
            ) : (
              <img src={modalData.media} alt="Modal product" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioList;
