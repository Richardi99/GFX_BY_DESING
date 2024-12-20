import React, { useRef, useState } from "react";

import "../styles/Contact.css";
import MarcoDiv from "../component/MarcoDiv";
import emailjs from "@emailjs/browser";

function Contact() {

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




  return (
    <section id="Contact">
      <div className="Contact-container center height-general-contact M-top">
        <h2>Contact Us</h2>
        <div className="Contact-container-details">
          <form  ref={form} className="form-contact"  onSubmit={sendEmail} >
            <h5>We are excited about new challenges !</h5>
            <h6>Let's schedule a meeting!</h6>
            <div className="Contact-write">
              <div className="writ1">
                <input type="text" name="from_name" placeholder="Name" required/>
                <input type="text" name="user_number" placeholder="Number (Optional)"/>
                <input type="email" name="email_id" placeholder="Email"  required/>
              </div>
              <div className="writ2">
                <textarea type="text" name="message" placeholder="Message"  required/>
                <div className="form-terminos">
                  <input className="checkbox" type="checkbox" required /> I
                  accept the terms and conditions
                </div>
                <button type="submit" id="button" ref={buttonRef} >Send</button>
              </div>
            </div>
          </form>

          {toastMessage && (
          <div className="toast">
            {toastMessage}
          </div>
          )}

          <div className="Contact-square">
            <a href="https://www.instagram.com/gfxbydesign/" target="_blank">
                <article className="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                  </svg>
                </article>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61553946382173" target="_blank">
                <article className="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 30 39 L 30 29 L 33.625 29 C 34.129 29 34.555187 28.623047 34.617188 28.123047 L 34.992188 25.123047 C 35.028188 24.839047 34.938047 24.553891 34.748047 24.337891 C 34.559047 24.122891 34.287 24 34 24 L 30 24 L 30 20.5 C 30 19.397 30.897 18.5 32 18.5 L 34 18.5 C 34.552 18.5 35 18.053 35 17.5 L 35 14.125 C 35 13.607 34.604844 13.174906 34.089844 13.128906 C 34.030844 13.123906 32.619984 13 30.833984 13 C 26.426984 13 24 15.616187 24 20.367188 L 24 24 L 20 24 C 19.448 24 19 24.447 19 25 L 19 28 C 19 28.553 19.448 29 20 29 L 24 29 L 24 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
                  </svg>
                </article>
            </a>
            <a href="https://wa.me/15718398805?text=Hello%2C%20I%20came%20from%20the%20website%2C%20I%27m%20interested%20in%20a%20design." target="_blank">
                <article className="whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z">
                      </path> 
                  </svg>
                </article>
            </a>
            <a href="mailto:gfxbydesignllc@gmail.com?subject=Interest%20in%20Web%20Design%20Service&body=Hello%2C%20I%27m%20interested%20in%20a%20web%20design%20service.">
                <article className="web">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                  <path d="M 24 4 C 15.81 4 8.7599219 8.94 5.6699219 16 L 9.0097656 16 C 10.906787 12.451375 14.036384 9.6594901 17.816406 8.1757812 C 16.507609 10.210641 15.469773 12.891594 14.810547 16 L 17.869141 16 C 19.149141 10.46 21.67 7 24 7 C 26.33 7 28.850859 10.46 30.130859 16 L 33.189453 16 C 32.530227 12.891594 31.492391 10.210641 30.183594 8.1757812 C 33.963616 9.6594901 37.093213 12.451375 38.990234 16 L 42.330078 16 C 39.240078 8.94 32.19 4 24 4 z M 14.638672 18.027344 A 1.250125 1.250125 0 0 0 13.464844 19.103516 L 12.642578 24.261719 L 11.146484 20.804688 A 1.250125 1.250125 0 0 0 8.8535156 20.804688 L 7.3574219 24.261719 L 6.5351562 19.103516 A 1.250125 1.250125 0 0 0 5.3300781 18.033203 A 1.250125 1.250125 0 0 0 4.0664062 19.496094 L 5.5664062 28.896484 A 1.250125 1.250125 0 0 0 7.9472656 29.195312 L 10 24.447266 L 12.052734 29.195312 A 1.250125 1.250125 0 0 0 14.433594 28.896484 L 15.933594 19.496094 A 1.250125 1.250125 0 0 0 14.638672 18.027344 z M 28.638672 18.027344 A 1.250125 1.250125 0 0 0 27.464844 19.103516 L 26.642578 24.261719 L 25.146484 20.804688 A 1.250125 1.250125 0 0 0 22.853516 20.804688 L 21.357422 24.261719 L 20.535156 19.103516 A 1.250125 1.250125 0 0 0 19.330078 18.033203 A 1.250125 1.250125 0 0 0 18.066406 19.496094 L 19.566406 28.896484 A 1.250125 1.250125 0 0 0 21.947266 29.195312 L 24 24.447266 L 26.052734 29.195312 A 1.250125 1.250125 0 0 0 28.433594 28.896484 L 29.933594 19.496094 A 1.250125 1.250125 0 0 0 28.638672 18.027344 z M 42.638672 18.027344 A 1.250125 1.250125 0 0 0 41.464844 19.103516 L 40.642578 24.261719 L 39.146484 20.804688 A 1.250125 1.250125 0 0 0 36.853516 20.804688 L 35.357422 24.261719 L 34.535156 19.103516 A 1.250125 1.250125 0 0 0 33.330078 18.033203 A 1.250125 1.250125 0 0 0 32.066406 19.496094 L 33.566406 28.896484 A 1.250125 1.250125 0 0 0 35.947266 29.195312 L 38 24.447266 L 40.052734 29.195312 A 1.250125 1.250125 0 0 0 42.433594 28.896484 L 43.933594 19.496094 A 1.250125 1.250125 0 0 0 42.638672 18.027344 z M 5.6699219 32 C 8.7599219 39.06 15.81 44 24 44 C 32.19 44 39.240078 39.06 42.330078 32 L 38.990234 32 C 37.093213 35.548625 33.963616 38.34051 30.183594 39.824219 C 31.492391 37.789359 32.530227 35.108406 33.189453 32 L 30.130859 32 C 28.850859 37.54 26.33 41 24 41 C 21.67 41 19.149141 37.54 17.869141 32 L 14.810547 32 C 15.469773 35.108406 16.507609 37.789359 17.816406 39.824219 C 14.036384 38.34051 10.906787 35.548625 9.0097656 32 L 5.6699219 32 z"></path>
                  </svg>
                </article>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
