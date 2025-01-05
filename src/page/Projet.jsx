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
      } catch (error) {}
    };

    fetchData();
  }, [id]);

  if (!dataProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="projet">
      <h1>{dataProject.name}</h1>
      <p>{dataProject.description}</p>
      <img src={dataProject.picture} alt={dataProject.name} />
      <a href ={dataProject.github}>Lien Github</a>
      <div>
        {dataProject.langage.map((langage) => (
          <div key={langage.name}>
            <i className={langage.icon}></i>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Projet;
