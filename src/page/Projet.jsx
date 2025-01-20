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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="container_projet">
      <div className="projet">
        <button className="projet_button_back" onClick={handleBack}>
          Retour
        </button>
        <h1 className="projet_title">{dataProject?.name}</h1>
        <div className="slider_projet">
          <div className="slider_projet_button">
            <i
              onClick={handleleft}
              className={` ${
                dataProject?.pictures.length === 1
                  ? ""
                  : "fa-solid  fa-arrow-left"
              }`}
            ></i>
          </div>
          <img
            src={dataProject?.pictures[index]}
            alt={dataProject?.name}
            className="pictureslider"
          />
          <div className="slider_projet_button">
            <i
              onClick={handleright}
              className={` ${
                dataProject?.pictures.length === 1
                  ? ""
                  : "fa-solid  fa-arrow-right"
              }`}
            ></i>
          </div>
        </div>
        <p>{dataProject?.description}</p>
        <div className="langages">
          {dataProject?.langage.map((langage) => (
            <div key={langage?.name} className="langage">
              <div className="langage_icon_projet">
                <i className={langage?.icon}></i>
                <img src={langage?.picture} alt="" className="test" />
              </div>

              <span className="white">{langage?.name}</span>
            </div>
          ))}
        </div>
        <div className="projet_link">
          {dataProject?.link.map((link) => (
            <a
              key={link?.name}
              href={link?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link?.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projet;
