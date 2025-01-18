import React from "react";
import "./Skill.css";
import { useState, useEffect } from "react";

export default function Skill() {
  const [dataSkill, setDataSkill] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setDataSkill(data);
      } catch (error) {
        console.error("Error fetching the skill data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(dataSkill.hardskill);

  return (
    <section className="skill" id="skill">
      <div className="skill_container">
        <h2 className="skill_title">Compétences</h2>
        <div className="skill_content">
          <h2 className="white">Hard Skill</h2>
          <div className="skill_content_item_container">
            {dataSkill.hardskill &&
              dataSkill.hardskill.map((skill, index) => (
                <div className="skill_content_item" key={index}>
                  <h3 className="white">{skill.name}</h3>
                  <div className="skill_content_item_icon">
                    <i className={skill.icon}></i>
                    <img className="picture_skill" src={skill.picture} alt="" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="skill_content">
          <h2 className="white">Soft Skill</h2>
          <div className="skill_content_item_container">
            {dataSkill.softskill &&
              dataSkill.softskill.map((skill, index) => (
                <div className="skill_content_item" key={index}>
                  <h3 className="white">{skill.name}</h3>
                  <i className={skill.icon}></i>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
