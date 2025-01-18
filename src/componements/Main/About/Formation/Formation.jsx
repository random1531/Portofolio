import React from 'react'
import './Formation.css'

export default function Formation() {
  return (
    <section className="formation" id="formation">

        <div className="formation_container">
            <h2 className='formation_container_title'>Formation</h2>
            <div className="formation_content">
                <div className="formation_content_item">
                    <h3>Formation Intégrateur Web</h3>
                    <p>Formation de 9 mois en développement web avec openclassrom</p>
                    <p>2024-2025</p>
                </div>
                <hr className='link_down' />
                <hr className='link_down' />
                <div className="formation_content_item">
                    <h3>Mention complémentaire en énergie renouvelable</h3>
                    <p>
                        Formation de 1 an en énergie renouvelable
                    </p>
                    <p>2011-2012</p>
                </div>
                <hr className='link_down' />
                <hr className='link_down' />
                <div className="formation_content_item">
                    <h3>Bac pro Eletrotechnique</h3>
                    <p>
                        Formation de 3 ans en électrotechnique
                    </p>
                    <p>2009-2011</p>
                </div>
            </div>
        </div>
    </section>
  )
}
