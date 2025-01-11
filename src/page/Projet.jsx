import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Style/ProjetPage.css";

const Projet = () => {
  const [dataProject, setData] = useState(null);
  const { id } = useParams();
  const [index, setIndex] = useState(0);
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

  const handleright = () => {
    const newIndex = (index + 1) % dataProject?.pictures.length;
    setIndex(newIndex);
  };
  const handleleft = () => {
    const newIndex =
      (index - 1 + dataProject?.pictures.length) % dataProject?.pictures.length;
    setIndex(newIndex);
  };
  console.log(index);


  return (
    <div className="container_projet">
      <div className="projet">
        <h1>{dataProject?.name}</h1>
       
        <div className="slider_projet">
          <i onClick={handleleft} className="fa-solid fa-arrow-left"></i>
          <img src={dataProject?.pictures[index]} alt={dataProject?.name} />
          <i onClick={handleright} className="fa-solid fa-arrow-right"></i>
        </div>
        <p>{dataProject?.description}</p>
        <a href={dataProject?.github} target="_blank" rel="noopener noreferrer">
          Lien Github
        </a>
        <a href={dataProject?.website} target="_blank" rel="noopener noreferrer">
          Lien vers le site
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
