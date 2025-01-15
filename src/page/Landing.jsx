import React from 'react'
import HeroBanner from '../componements/Main/HeroBanner/HeroBanner'
import Project from '../componements/Main/Projet/Project'
import Contact from '../componements/Main/Contact/Contact'
import ModalProjet from '../componements/Main/Projet/ModalProjet/ModalProjet'

export default function Landing() {
  return (
    
    <>
     <HeroBanner />
        <Project />
        <Contact />
    
    </>
  )
}
