import React from 'react'
import './NavLink.css'

export default function NavLink({NameNav,linkNav,target,handle}) {
  return (
    <a href={linkNav} target={target} onClick={handle}>{NameNav}</a>
  )
}
