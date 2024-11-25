import React, { useState, useEffect, useRef } from "react";
import "../styles/Prime.css";
import emailjs from "@emailjs/browser";

const Prime = () => {
  const form = useRef();
  const buttonRef = useRef(null); // Referencia para el botón
  const [toastMessage, setToastMessage] = useState(""); // Estado para manejar los mensajes tipo "toast"

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que el checkbox esté marcado
    const checkbox = form.current.querySelector(".checkbox");
    if (!checkbox.checked) {
      setToastMessage("Please accept the terms and conditions.");
      setTimeout(() => setToastMessage(""), 2000); // Limpia el mensaje tras 2 segundos
      return;
    }

    // Cambiar el texto del botón a "Enviando..."
    if (buttonRef.current) {
      buttonRef.current.innerText = "Sending...";
    }

    // Capturar el valor del campo "Number" y agregarlo al mensaje
    const numberField = form.current.querySelector('input[name="user_number"]');
    const numberValue = numberField ? numberField.value : "";
    const messageField = form.current.querySelector('textarea[name="message"]');
    if (messageField && numberValue) {
      const transparentMessage = `\n\n(Númber: ${numberValue})`;
      messageField.value += transparentMessage; // Se agrega como parte del mensaje
    }

    emailjs
      .sendForm(
        "service_22wfuvp",
        "template_76zcn1k",
        form.current,
        "X6KY1HKx7BLzZyFDB"
      )
      .then(
        (result) => {
          setToastMessage("¡Email sent successfully!");
          setTimeout(() => setToastMessage(""), 2000); // Limpia el mensaje tras 2 segundos

          console.log("Email sent successfully: ", result.text);

          // Restablecer el texto del botón y limpiar el formulario
          if (buttonRef.current) {
            buttonRef.current.innerText = "Send";
          }
          form.current.reset(); // Limpiar el formulario
        },
        (error) => {
          setToastMessage("Error sending email. Try again.");
          setTimeout(() => setToastMessage(""), 2000); // Limpia el mensaje tras 2 segundos

          console.log("Failure to send Email: ", error.text);

          // Restablecer el texto del botón en caso de error
          if (buttonRef.current) {
            buttonRef.current.innerText = "Send";
          }
        }
      );
  };

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
    }, 4000); // Cambia palabra cada 4 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [words.length]);

  const currentWord = words[wordIndex]; // Palabra actual para la animación de escribir

  return (
    <section id="Primer">
      <div className="Prime-container center">
        <div className="Prime-building">
          <h1>
            <span className="h1-span">DESIGN</span> that make an <br />{" "}
            <span
              className="h1-span2 animate"
              style={{ "--steps": currentWord.length }}
            >
              {currentWord}
            </span>
          </h1>
          <div className="PrimeText2">
            <h2>
              Welcome to GFX by Design!
              <br className="br1" />
              <span>
                Specialists in bringing your creative vision to life.
                <br className="br2" />
                Our team of experts offers a full range of services
              </span>
            </h2>
          </div>
          <div className="PrimeText3">
            <span className="span1">Branding Design</span>
            <strong> </strong>
            <span className="span2">Logo Design</span>
            <strong> </strong>
            <span className="span3">Printing Solutions</span>
            <strong> </strong>
            <span className="span4">Branding Strategies</span>
          </div>
        </div>

        <form ref={form} className="form slide-up" onSubmit={sendEmail}>
          <h3>Contact Us</h3>
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="email_id" placeholder="Email" required />
          <input type="text" name="user_number" placeholder="Number" pattern="[0-9]+" title="Please enter a valid number." required/>
          <textarea type="text" name="message" placeholder="Message" required/>
          <div className="form-terminos">
            <input className="checkbox" type="checkbox" required/> I accept the terms and
            conditions
          </div>
          <button type="submit" id="button" ref={buttonRef}>
            Send
          </button>
        </form>

        {toastMessage && (
          <div className="toast">
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Prime;
