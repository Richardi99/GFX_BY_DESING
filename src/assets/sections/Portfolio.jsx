import React, { useState } from "react";
import productsData from '../component/productsData'
import PortfolioFilters from "../component/PortfolioFilters";
import PortfolioList from "../component/PortfolioList";
import '../styles/Portfolio.css'

function Portfolio() {

  const [visibleProducts, setVisibleProducts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = 
  selectedCategory === 'All'
  ? productsData
  : productsData.filter((product) => product.category === selectedCategory)

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 3);
  }

  return (
    <section id="Portfolio">
      <div className="Portfolio-container center height-general-portfolio M-top">
        <h2>Portfolio</h2>
          <PortfolioFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <PortfolioList
          
            products={filteredProducts}
            visibleProducts={visibleProducts}
          >
            
          </PortfolioList>
      </div>

          {visibleProducts < filteredProducts.length && (
            <button className="load-more" onClick={handleLoadMore}>
              Load More
            </button>
          )}
    </section>
  );
}

export default Portfolio;
