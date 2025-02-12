import React from "react";
import "./HeroBanner.css";
import HeroBanners from "../../../assets/integrateur.webp";

export default function HeroBanner() {
  return (
    <section className="hero_banner">
      <div className="hero_banner_container">
        <div className="hero_banner_text_container">
          <h1 className="hero_banner_title">Loic RAVAL</h1>
          <p className="hero_banner_text">Intégrateur Web</p>
          <div className="hero_banner_button_container">
            <button className="hero_banner_button">
              {" "}
              <a className="hero_banner_link" href="/#contact">Contacter Moi</a>
            </button>
            <button className="hero_banner_button">
              <a className="hero_banner_link"  href="/apropos/formation">A propos</a>{" "}
            </button>
          </div>
        </div>
        <img src={HeroBanners} alt="dev" className="hero_banner_picture" />
      </div>
    </section>
  );
}
