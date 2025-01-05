import React from 'react'
import './Formulaire.css'
import InputForm from './InputForm/InputForm'

export default function Formulaire() {
  return (
    <form action="">
       <div className="form-group">
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
         
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
         
          required
        ></textarea>
      </div>
    </form>
  )
}
