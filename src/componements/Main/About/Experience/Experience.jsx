import React from "react";
import "./Experience.css";
import Item from "./Item/Item";

export default function Experience() {
  return (
    <section>
      <div className="experience_container">
        <h2 className="experience_title">Expérience</h2>
        <div className="experience_content">
          <Item
            intituler="Technitien amélioration continu"
            entreprise="Prysmian"
            description="Mettre en place des solutions technique afin d'améliorer les condition de travail, ainsi que des application web crée avec l'outil powerapps"
            date="2021-2025"
          />
          <hr className="link_down" />
          <hr className="link_down" />
          <Item
            intituler="Gestionnaire de flux"
            entreprise="Prysmian"
            description="Gestion et organisation des flux de production"
            date="2020-2021"
          />
          <hr className="link_down" />
          <hr className="link_down" />
          <Item
            intituler="Contrôle"
            entreprise="Prysmian"
            description="Contrôle de câble élétrique"
            date="2013-2020"
          />
          <hr className="link_down" />
          <hr className="link_down" />
          <Item
            intituler="Energiespecialiste"
            entreprise="Sol'R"
            description="Installateur photovoltaique/ eolien"
            date="2013"
          />
          <hr className="link_down" />
          <hr className="link_down" />
          <Item
            intituler="Monteur-câbleur"
            entreprise="Auto cab"
            description="Cablage d'armoire élétrique"
            date="2012"
          />
        </div>
      </div>
    </section>
  );
}
