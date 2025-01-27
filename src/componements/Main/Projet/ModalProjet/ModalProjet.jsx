import React from "react";
import "./ModalProjet.css";

export default function ModalProjet({ openModal, Titre }) {
  return (
    <>
      <div className="modal_projet">
        <p className="modal_projet_close" onClick={openModal}>
          X
        </p>

        <div className="modal_projet_container">
          <h2></h2>
          <p>{Titre}</p>
          <div className="modal_projet_container_link">
            <a
              href="https://www.linkedin.com/in/loic-raval-7248831ab/"
              target="_blank"
            >
              Lien vers le projet
            </a>
            <a
              href="https://www.linkedin.com/in/loic-raval-7248831ab/"
              target="_blank"
            >
              Lien vers le code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
