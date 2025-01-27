import React from "react";
import "./Style/Apropos.css";
import profilpic from "../assets/loic.jpg";
import { NavLink, Outlet } from "react-router-dom";



export default function Apropos() {


  return (
    <>
      <div className="apropos" id="apropos">
        <div className="apropos_container">
          <img src={profilpic} alt="" className="profil_picture" />
          <div className="description_selection">
            
              <NavLink to={"/apropos/description"} className="description_selection_link" >Description</NavLink>         
              <NavLink to={"/apropos/formation"} className="description_selection_link" >Formation</NavLink>
              <NavLink to={"/apropos/experience"} className="description_selection_link" >Expérience</NavLink>
              <NavLink to={"/apropos/skill"} className="description_selection_link" >Skill</NavLink>     
           
          </div>
        </div>
        <div className="apropos_content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
