import React from 'react'
import './NavLink.css'

export default function NavLink({NameNav,linkNav,target}) {
  return (
    <a href={linkNav} target={target}>{NameNav}</a>
  )
}
