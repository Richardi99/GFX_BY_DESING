import React from 'react';
import '../styles/Portfolio.css';

function PortfolioFilters({ selectedCategory, onSelectCategory }) {
  const categories = ['All', 'Logos', 'Banners', 'Car designs', 'Business cards', 'Others'];

  return (
    <div className="Portfolio-class">
      {categories.map((category, index) => (
        <button
          key={category}
          className={selectedCategory === category || (selectedCategory === '' && index === 0) ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default PortfolioFilters;
