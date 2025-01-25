import React from "react";
import "./Item.css";

export default function Item({ intituler, entreprise, description, date }) {
  return (
    <div className="experience_content_item">
      <h3>{intituler}</h3>
      <div className="experience_content_item_content">
        <p className="experience_content_item_entreprise">{entreprise}</p>
        <p className="experience_content_item_desciption">{description}</p>
        <p  className="experience_content_item_date">{date}</p>
      </div>
    </div>
  );
}
