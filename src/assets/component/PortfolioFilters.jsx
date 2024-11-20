import React from 'react'

function PortfolioFilters({selectedCategory, onSelectCategory}) {
  return (
   <div className="Portfolio-class">
      <button onClick={() => onSelectCategory('All')} >All</button>
      <button onClick={() => onSelectCategory('Logos')} >Logos</button>
      <button onClick={() => onSelectCategory('Banners')} >Banners</button>
      <button onClick={() => onSelectCategory('Car designs')} >Car designs</button>
      <button onClick={() => onSelectCategory('Business cards')} >Business cards</button>
      <button onClick={() => onSelectCategory('Others')} >Others</button>
   </div>
  )
}

export default PortfolioFilters