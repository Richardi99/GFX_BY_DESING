import React, { useState, useEffect } from "react";
import "../styles/Prime.css";

function Prime() {
  const [wordIndex, setWordIndex] = useState(0); // Índice de la palabra actual
  const words = ["IMPACT", "LEGACY", "CHANGE"]; // Palabras rotativas

  useEffect(() => {
    // Animación inicial para Prime-building y formulario
    const building = document.querySelector(".Prime-building");
    const form = document.querySelector("form");

    if (building) {
      setTimeout(() => {
        building.classList.add("visible"); // Muestra Prime-building
        building.classList.add("slide-in-left"); // Inicia la animación
      }, 500); // Retraso inicial
    }

    if (form) {
      setTimeout(() => {
        form.classList.add("visible"); // Muestra el formulario
        form.classList.add("wobble"); // Inicia animación wobble

        // Elimina la clase 'wobble' después de que termine la animación
        setTimeout(() => {
          form.classList.remove("wobble");
        }, 1000); // Duración de wobble
      }, 1500); // Espera que termine Prime-building
    }

    // Rotación de palabras
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Cambia palabra cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [words.length]);

  const currentWord = words[wordIndex]; // Palabra actual para la animación de escribir

  return (
    <section id="Primer">
      <div className="Prime-container center">
        <div className="Prime-building">
          <h1>
            <span className="h1-span">DESIGN</span> that make an <br />  <a href="tel:+"></a>{" "}
            <span
              className="h1-span2 animate"
              style={{ "--steps": currentWord.length }}
            >
              {currentWord}
            </span>
          </h1>
          <div className="PrimeText2">
            <h2>
              Welcome to GFX by Design!<br className="br1"/>
              <span>
                Specialists in bringing your creative vision to life. <br />
                Our team of experts offers a full range of services
              </span>
            </h2>
          </div>
          <div className="PrimeText3">
            <span className="span1">Branding Design</span>
            <strong> </strong>
            <span className="span2">Logo Design</span>
            <strong>  </strong>
            <span className="span3">Printing Solutions</span>
            <strong>  </strong>
            <span className="span4">Branding Strategies</span>
          </div>
        </div>

        <form className="form .slide-up">
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
  );
}

export default Prime;
