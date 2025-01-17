import React from 'react'
import './Contact.css'
import Formulaire from './Formulaire/Formulaire'

export default function Contact() {
  return (
   <section className="contact" id='contact'>
    <h2 className='contact_title'>Contact</h2>
    <p className='contact_text'>
      Vous avez un projet, une question ou vous voulez simplement discuter ?
      N'hésitez pas à me contacter en remplissant le formulaire ci-dessous.
    </p>
    <Formulaire />
    </section>
  )
}
