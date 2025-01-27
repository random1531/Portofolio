import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer_content">
        <div className="footer_links">
          <p className="value">Liens</p>
          <div className="footer_links_elements">
            <a
              href="https://www.linkedin.com/in/loicraval"
              target="_blank"
              rel="noopener noreferrer"
              className="white"
              >
              LinkedIn
            </a>
            <a
              href="https://github.com/loicraval"
              target="_blank"
              rel="noopener noreferrer"
              className="white"
              >
              GitHub
            </a>
          </div>
        </div>
              <p>© 2025 Loic Raval - Tous droits réservés</p>
        <div className="footer_contact">
          <p className="value">Contact</p>
          <div className="footer_contact_elements">
            <p>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:loic.raval@gmail.com" className="white"> Email</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 06 42 62 98 31
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
