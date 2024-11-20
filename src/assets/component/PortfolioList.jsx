import React from 'react'
import MarcoDiv from './MarcoDiv'
import '../styles/Portfolio-item.css'

function PortfolioList({products, visibleProducts}) {
  return (
    <div className="Portfolio-all">
      {products.slice(0, visibleProducts).map((product) => (
          <MarcoDiv>
        <div key={product.id} className='Portfolio-item'>
            <div className='barr'></div>
            <img src={product.image} alt="producto1" />
        </div>
          </MarcoDiv>
      ))}
    </div>
  )
}

export default PortfolioList