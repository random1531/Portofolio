import React, { useRef } from 'react';
import "./Formulaire.css";
import emailjs from '@emailjs/browser';

export default function Formulaire() {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_wej7rrg', 'template_ew45zhb', form.current, '6UqqF2jUWvKdBBVvc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

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
    </form>
  );
}