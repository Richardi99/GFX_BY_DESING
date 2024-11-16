import React from "react";

function Portfolio() {
  return (
    <section id="Portfolio ">
      <div className="Portfolio-container center height-general M-top">
        <h2>Portfolio</h2>
        <div className="Portfolio-class">
          <button>All</button>
          <button>Branding</button>
          <button>Graphics Design</button>
          <button>Printing</button>
        </div>

        <div className="Portfolio-all">
          <div className="Portfolio-item">
            <div className="barr"></div>
            <img src="#" alt="Item1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
