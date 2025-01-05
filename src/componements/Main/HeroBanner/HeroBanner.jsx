import React from "react";
import "./HeroBanner.css";
import HeroBanners from "../../../assets/integrateur.png";

export default function HeroBanner() {
  return (
    <section className="hero_banner">
      <div className="hero_banner_container">
        <div className="hero_banner_text_container">
          <h1 className="hero_banner_title">Loic RAVAL</h1>          
          <p className="hero_banner_text">Intégrateur Web</p>
          <button className="hero_banner_button">Contacter Moi</button>
        </div>
        <img src={HeroBanners} alt="" className="hero_banner_picture" />
      </div>
    </section>
  );
}
