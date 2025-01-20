import NavLink from "./NavLink/NavLink";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState, useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const [pagination, setPagination] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/apropos/formation") {
      setActive("active_page");
    } else if (window.location.pathname === "/apropos/experience") {
      setActive("active_page");
    } else if (window.location.pathname === "/apropos/skill") {
      setActive("active_page");
    }
  });

  const scrollref = () => {
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setPagination(null);
    } else {
      setPagination("/#project");
    }
  };
  const togleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="header_nav">
      <h1 className="title">Loic RAVAL</h1>
      <div className="header_nav_links">
        <NavLink
          NameNav="A propos"
          linkNav="/apropos/description"
          className={active}
        />

        <NavLink NameNav="Projets" linkNav={pagination} handle={scrollref} />

        <NavLink NameNav="Contact" linkNav="/#contact" />
      </div>
      <div className="header_nav_links_social">
        <NavLink
          NameNav={
            <i className="fa-brands fa-linkedin" aria-label="LinkedIn"></i>
          }
          linkNav="https://www.linkedin.com/in/loic-raval-7248831ab/"
          target={"_blank"}
          aria-label="LinkedIn"
          alt="LinkedIn"
        />
        <NavLink
          NameNav={<i className="fa-brands fa-github" aria-label="GitHub"></i>}
          linkNav="https://github.com/random1531"
          target={"_blank"}
          aria-label="GitHub"
          alt="GitHub"
        />
      </div>
      <i className="fa-solid fa-bars hamburger" onClick={togleMenu}></i>

      {menu && <HamburgerMenu closeMenu={togleMenu} />}
    </nav>
  );
}
