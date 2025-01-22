import React from "react";
import NavLink from "../NavLink/NavLink";
import "./HamburgerMenu.css";

export default function HamburgerMenu({ closeMenu }) {
  return (
    <>
      <div className="header_nav_links_hm">
        <p className="close" onClick={closeMenu}>
          X
        </p>
        <NavLink NameNav="A propos" handle={closeMenu} linkNav="/apropos/description" />
        <NavLink NameNav="Projets" handle={closeMenu} linkNav="/#project" />
        <NavLink NameNav="Contact" handle={closeMenu} linkNav="/#contact" />
      </div>
    </>
  );
}
