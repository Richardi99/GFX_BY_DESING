import React from "react";
import "../styles/Service.css";
import MarcoDiv from "../component/MarcoDiv";

function Service() {
  return (
    <section id="Service">
      <div className="Service-container center center height-general M-top">
          <h2>Services</h2>
        <div className="Cards">
          <div className="Service-Card">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>BRANDING</h3>
                  <p>
                    Brands are everwhere, even when we can’t see them. We build
                    lasting brands that convey emotions and values that are
                    right for all audiences.
                  </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                  <h3>content2</h3>
                </div>
              </div>
            </MarcoDiv>
          </div>
          <div className="Service-Card">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>PRINTING</h3>
                  <p>
                    Brands are everwhere, even when we can’t see them. We build
                    lasting brands that convey emotions and values that are
                    right for all audiences.
                  </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                  <h3>content2</h3>
                </div>
              </div>
            </MarcoDiv>
          </div>
          <div className="Service-Card">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>GRAPHICS DESIGN</h3>
                  <p>
                    Brands are everwhere, even when we can’t see them. We build
                    lasting brands that convey emotions and values that are
                    right for all audiences.
                  </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                  <h3>content2</h3>
                </div>
              </div>
            </MarcoDiv>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
