import React, { useEffect } from "react";
import "../styles/Prime.css";


function Prime() {

  useEffect(() => {
    const building = document.querySelector(".Prime-building");
    const form = document.querySelector("form");

    if (building) {
      // Hacer visible el .Prime-building después de un pequeño retraso
      setTimeout(() => {
        building.classList.add("visible"); // Muestra el building con la animación
        building.classList.add("slide-in-left"); // Activar la animación
      }, 500); // Retraso opcional antes de iniciar la animación
    }

    if (form) {
      // Esperar a que el .Prime-building termine su animación antes de mostrar el form
      setTimeout(() => {
        form.classList.add("visible"); // Mostrar el formulario
        form.classList.add("wobble"); // Activar la animación 'wobble'

        // Eliminar la animación 'wobble' después de 1 segundo
        setTimeout(() => {
          form.classList.remove("wobble");
        }, 1000); // Duración de la animación wobble
      }, 1500); // Retraso para esperar que la animación de .Prime-building termine
    }
  }, []);



  return (
    <>

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
              <span className="span2"> Graphics Design</span>
              <strong> - </strong>
              <span className="span3">Printing</span>
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
    </>
  );
}

export default Prime;
