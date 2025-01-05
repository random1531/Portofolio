import React from "react";
import { useState, useEffect } from "react";
import "./Project.css";
import ProjectCard from "./PojetCard/ProjetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../slider.css";
import { Link } from "react-router-dom";

export default function Project() {
  const [dataProject, setDataProject] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setDataProject(data.project));
  });

  return (
    <section className="project" id="project">
      <div className="project_container">
        <h2>Mes projet</h2>
        <div className="project_card_container">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataProject.map((project) => (
              <SwiperSlide key={project.name}>
                <Link to={`/projet/${project.name}`} key={project.name} id={project.name} className="project_card">
                <ProjectCard
                  title={project.name}
                  description={project.description}
                  image={project.picture}
                  link={project.github}
                  langage={project.langage.map((langage) => (
                    <div key={langage.name}>
                      <i className={langage.icon}></i>
                    </div>
                  ))}
                />
                  </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
