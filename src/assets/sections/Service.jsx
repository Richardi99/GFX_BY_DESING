import React from "react";
import "../styles/Service.css";
import MarcoDiv from "../component/MarcoDiv";
import mono from '../img/diseños/piano.png'
import cabra from '../img/diseños/cabra.png'
import cinturon from '../img/diseños/cinturon.png'
import polo from '../img/diseños/polo.png'
import poster1 from '../img/diseños/POSTER1.jpeg'
import poster2 from '../img/diseños/POSTER2.jpg'
import piano from '../img/diseños/piano.png'
import WebDesign from '../img/Others/image7.jpeg'
import WebDesign2 from '../img/Others/image6.jpeg'


function Service() {
  return (
    <section id="Service">
      <div className="Service-container center center height-general M-topx">
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

              <div className="second-content flip-card-inne">
                <div className="first-content-text2">
                  <h3>BRANDING</h3>
                  <div className="second-content-imgs">
                    <img src={polo} alt="Imagen 1"/>
                    <img src={mono} alt="Imagen 2"/>
                    <img src={cabra} alt="Imagen 3"/>
                    <img src={cinturon} alt="Imagen 4"/>
                  </div>
                </div>
              </div>
            </MarcoDiv>
          </div>

          <div className="Service-Card">

            <div className="Card-inner">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>PRINTING</h3>
                  <p>
                  We bring ideas to life with outstanding quality. From bold prints to perfect finishes, every piece exudes excellence.
                   
                  </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                  <h3>PRINTING</h3>
                  <div className="second-content-imgs">
                    <img src={poster1} alt="Imagen 1"/>
                    <img src={poster2} alt="Imagen 2"/>

                  </div>
                </div>
              </div>
            </MarcoDiv>
            </div>
          </div>
          <div className="Service-Card">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>GRAPHICS DESIGN</h3>
                  <p>
                  Design that speaks volumes. We craft visuals that captivate, inspire, and
                   leave a lasting impression, perfectly tailored to your brand.
                   </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                <h3>GRAPHICS DESIGN</h3>
                  <div className="second-content-imgs">
                    <img src={piano} alt="Imagen 1"/>

                  </div>
                </div>
              </div>
            </MarcoDiv>
          </div>
          <div className="Service-Card">
            <MarcoDiv>
              <div className="first-content">
                <div className="first-content-text">
                  <h3>WEB DESIGNS</h3>
                  <p>
                  Web designs that empower your brand. We create seamless, visually striking websites that engage, 
                  convert, and elevate your online presence.
                   </p>
                </div>
              </div>

              <div className="second-content">
                <div className="first-content-text2">
                <h3>WEB DESIGNS</h3>
                  <div className="second-content-imgs">
                    <img src={WebDesign} alt="Imagen 1"/>
                    <img src={WebDesign2} alt="Imagen 2"/>

                  </div>
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
