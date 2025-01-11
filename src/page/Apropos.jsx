import React from "react";
import "./Style/Apropos.css";
import profilpic from "../assets/loic.jpg";
import { useState, useEffect } from "react";



export default function Apropos() {


  return (
    <>
      <div className="apropos" id="apropos">
        <div className="apropos_container">
          <img src={profilpic} alt="" className="profil_picture" />
          <div className="description_selection">
            <ul>
              <li>* Expérience</li>
              <li>* Formation</li>
              <li>* Skill</li>
            </ul>
          </div>
        </div>
        <div className="apropos_content">
          <p>azeazeazea</p>
        </div>
      </div>
    </>
  );
}
