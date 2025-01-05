import React from 'react'

export default function InputForm({Formdata}) {
  return (
    <div>
        <label htmlFor="nom">Nom</label>
        <input type="text" placeholder="Nom"  value={Formdata.Value} />

    </div>
  )
}
