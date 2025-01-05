import React from "react";
import NavLink from "./NavLink/NavLink";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header_nav">
      <h1>Loic RAVAL</h1>
      <div className="header_nav_links">
        <NavLink NameNav="A propos" linkNav="#"/>
        <NavLink NameNav="Projets" linkNav="#"/>
        <NavLink NameNav="Contact" linkNav="#"/>
      </div>
        <div className="header_nav_links_social">
            <NavLink NameNav={<i className="fa-brands fa-linkedin"></i> }linkNav="https://www.linkedin.com/in/loic-raval-7248831ab/" target={'_blank'}/>
            <NavLink NameNav={<i className="fa-brands fa-github"></i> } linkNav="https://github.com/random1531" target={'_blank'}/> 
        </div>
    </nav>
  );
}
