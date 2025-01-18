import React from "react";
import "./NavLink.css";

export default function NavLink({
  NameNav,
  linkNav,
  target,
  handle,
  className,
}) {
  return (
    <a href={linkNav} target={target} onClick={handle} className={className}>
      {NameNav}
    </a>
  );
}
