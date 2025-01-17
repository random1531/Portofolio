import React, { useRef } from "react";
import "./Formulaire.css";
import emailjs from "@emailjs/browser";
import ModalMailSend from "../ModalMailSend/ModalMailSend";
import { useState } from "react";

export default function Formulaire() {
  const [message, setMessage] = useState("");
  const [animation, setAnimation] = useState("");
  const [open, setOpen] = useState(false);
  const form = useRef();

  const close = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wej7rrg",
        "template_ew45zhb",
        form.current,
        "6UqqF2jUWvKdBBVvc"
      )
      .then(
        (result) => {
          setOpen(true);
          if (result.text === "OK") {
            setAnimation("fa-regular fa-paper-plane animation_succes_plane");
            setTimeout(() => {
              setMessage("Message envoyé avec succès");
            }, 3000);
            form.current.reset();
          } else {
            setAnimation("fa-regular fa-paper-plane animation_error_plane");
            setMessage("Erreur lors de l'envoie du message");
          }
          setTimeout(() => {
            setOpen(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className="formulaire" onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="user_name">Nom:</label>
        <input type="text" id="user_name" name="user_name" required />
      </div>
      <div className="form-group">
        <label htmlFor="user_email">Email:</label>
        <input type="email" id="user_email" name="user_email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Sujet:</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
      {open && (
        <ModalMailSend message={message} animation={animation} close={close} />
      )}
    </form>
  );
}
