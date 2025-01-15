import React from "react";
import "./ProjetCard.css";

export default function ProjetCard({ title, langage, image, modal }) {
  return (
    <article className="project_card" onClick={modal}>
      
        <h3 className="project_card_title">{title}</h3>
        <img src={image} alt="" className="project_card_picture" />
      
      <div className="project_card_text_container">
        <div className="project_card_langage">{langage}</div>
      </div>
    </article>
  );
}
