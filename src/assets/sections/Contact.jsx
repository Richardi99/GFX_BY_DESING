import React from "react";
import "../styles/Contact.css";
import MarcoDiv from "../component/MarcoDiv";

function Contact() {
  return (
    <section id="Contact">
      <div className="Contact-container center height-general-portfolio M-top">
        <h2>Contact Us</h2>
        <div className="Contact-container-details">
          <form className="form-contact">
            <h5>We are excited about new challenges !</h5>
            <h6>Let's schedule a meeting!</h6>
            <div className="Contact-write">
              <div className="writ1">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Number" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="writ2">
                <textarea type="text" placeholder="Message" />
                <div className="form-terminos">
                  <input className="checkbox" type="checkbox" required /> I accept
                  the terms and conditions
                </div>
                <button>Send</button>
              </div>
            </div>
          </form>

          <div className="Contact-square">
            <a href="#">
              <MarcoDiv>
              <article>Email</article>
              </MarcoDiv>
            </a>
            <a href="#">
              <MarcoDiv>
              <article>Facebook</article>
              </MarcoDiv>
            </a>
            <a href="#">
              <MarcoDiv>
              <article>Instragram</article>
              </MarcoDiv>
            </a>
            <a href="#">
              <MarcoDiv>
              <article>Whatsapp</article>
              </MarcoDiv>
            </a>
           
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
