import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Prime.css";

function Prime() {
  return (
    <>
      <Helmet>
        <title>GFX BY DESIGN</title>
        <meta
          name="description"
          content="Your partner in transforming ideas into stunning visuals."
        />
      </Helmet>
      <section id="Primer">
        <div className="Prime-container center">
          <div className="Prime-building">
            <h1>
              <span className="h1-span">Building</span> brands <br /> with{" "}
              <span className="h1-span animate">purpose</span>
            </h1>
            <div className="PrimeText2">
              <h2>
                Your partner in transforming ideas into <br /> stunning visuals.
              </h2>
            </div>
            <div className="PrimeText3">
              <span className="span1">Branding Design</span>
              <strong> - </strong>
              <span className="span2">Graphics Design</span>
              <strong> - </strong>
              <span className="span3">Printing</span>
            </div>
          </div>

          <form className="form">
            <h3>Contact Us</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Number" />
            <textarea type="text" placeholder="Message" />
            <div className="form-terminos">
              <input className="checkbox" type="checkbox" required /> I accept
              the terms and conditions
            </div>
            <button>Send</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Prime;
