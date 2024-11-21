import React from 'react';
import MarcoDiv from './MarcoDiv';
import '../styles/Portfolio-item.css';

function PortfolioList({ products, visibleProducts }) {
  return (
    <div className="Portfolio-all">
      {products.slice(0, visibleProducts).map((product) => (
        <div key={product.id} className="Portfolio-item">
          <MarcoDiv>
            <div className="barr"></div>
            <img src={product.image} alt="producto1" />
          </MarcoDiv>
        </div>
      ))}
    </div>
  );
}

export default PortfolioList;
