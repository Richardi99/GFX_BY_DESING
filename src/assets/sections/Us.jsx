import React from "react";
import "../styles/Us.css";
import MarcoDiv from "../component/MarcoDiv";
import video1 from '../VideosGfx/vid1c.mp4';
import video2 from '../VideosGfx/vid2c.mp4';
 
function Us() {
  return (
    <section id="Us">
      <div className="Us-container center height-general M-top .height-general-2">
        <div className="Us-container-Text">
          <h2>About Us</h2>
          <div className="Us-Titles">
            Creative - Innovation - Impactful
            </div>
          <div className="Us-text">
            <p>
            We are thrilled to announce our partnership with Byrtec Solutions, 
            allowing us to now provide comprehensive website development.
            Whether you need a striking logo, <strong>impactful</strong>  branding, 
            or a user-friendly website, we are here to help you stand out in the digital world.
             Let's create something amazing together in the heart of 
             <strong>Washington DC</strong>  to the world.

             {/*  Our <strong>Washington DC</strong> - based team of marketers,
              creatives, designers, developers, communicators, and engineers
              combines <strong>innovation</strong> with{" "}
              <strong>strategy.</strong> We dive deep into understanding each
              client’s unique needs to deliver solutions that drive growth and
              achieve marketing goals. */}
            </p>
          </div>
        </div>

        <div className="Us-container-Videos">
            <div className="Us-container-Img-video1 videx1">
              <MarcoDiv>
                  <video 
                  className="vid-c1" 
                  src ={video1} 
                  autoPlay muted loop>
                  </video>
              </MarcoDiv>
            </div>

            <div className="Us-container-Img-video1 videx2">
              <MarcoDiv>
                  <video 
                  className="vid-c1" 
                  src= {video2}
                  autoPlay muted loop>
                  </video>
              </MarcoDiv>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Us;
