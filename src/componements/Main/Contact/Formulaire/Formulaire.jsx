import React from "react";
import "./Formulaire.css";


export default function Formulaire() {
  const data = {
    Name: "Loic",
    Email: "loicraval",
    Subject: "subject",
    Message: "message",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.notion.com/v1/databases/173b882ea2998014a7fff0df4f260f51", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer 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"
      },
      body: JSON.stringify({
        Nom: data.Name,
        Email: data.Email,
        Subject: data.Subject,
        Message: data.Message,
      }),
    })
  };


  return (
    <form action="" className="formulaire">
      <div className="form-group">
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
      <label htmlFor="subject">subject:</label>
      <input type="subject" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button onClick={handleSubmit}>Envoyer</button>
      
    </form>
  );
}


