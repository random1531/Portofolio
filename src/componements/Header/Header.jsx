import NavLink from "./NavLink/NavLink";
import "./Header.css";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState, useEffect, useNavigate } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (
      currentPath === "/apropos/formation" ||
      currentPath === "/apropos/experience" ||
      currentPath === "/apropos/skill" ||
      currentPath === "/apropos/description"
    ) {
      setActive("active_page");
    } else {
      setActive("");
    }
  }, [window.location.pathname]);


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
       
        {location.pathname === "/" ? (<NavLink NameNav="Projets"  linkNav="/#project" />) : <NavLink NameNav="Projets" linkNav="/"  /> }
       
        <NavLink NameNav="Contact" linkNav="/#contact" />
      </div>
      <div className="header_nav_links_social">
        <NavLink
          NameNav={
            <i
              className="fa-brands fa-linkedin"
              aria-label="LinkedIn"
              alt="LinkedIn"
            ></i>
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
