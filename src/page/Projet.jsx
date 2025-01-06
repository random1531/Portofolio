import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjetPage.css";

const Projet = () => {
  const [dataProject, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        const project = data.project.find((project) => project.name === id);
        setData(project);
      } catch (error) {
        console.error("Error fetching the project data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container_projet">
      <div className="projet">
        <h1>{dataProject?.name}</h1>
        <p>{dataProject?.description}</p>
        <img src={dataProject?.picture} alt={dataProject?.name} />
        <a href={dataProject?.github} target="_blank" rel="noopener noreferrer">
          Lien Github
        </a>
        <div className="langages">
          {dataProject?.langage.map((langage) => (
            <div key={langage?.name} className="langage">
              <i className={langage?.icon}></i>
              <span>{langage?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projet;
