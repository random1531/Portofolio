import React from 'react'
import HeroBanner from '../componements/Main/HeroBanner/HeroBanner'
import Project from '../componements/Main/Projet/Project'
import Contact from '../componements/Main/Contact/Contact'


export default function Landing({project}) {

  return (
    
    <>
      <HeroBanner />
        <Project ref={project} />
        <Contact />
    
    </>
  )
}
