import React from "react";
import NavLink from "../NavLink/NavLink";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  return (
    <>
      <div className="header_nav_links_hm">
        <NavLink NameNav="A propos" linkNav="/apropos" />
        <NavLink NameNav="Projets" linkNav="/#project" />
        <NavLink NameNav="Contact" linkNav="/#contact" />
      </div>
    </>
  );
}
