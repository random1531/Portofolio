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
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setDataProject(data.project);
      } catch (error) {
        console.error("Error fetching the project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="project" id="project">
      <div className="project_container">
        <h2>Mes projet</h2>
        <div className="project_card_container">
          <i className="fa-solid fa-chevron-left chevron" pagination={1}></i>
          <Swiper           
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {dataProject.map((project) => (
              <SwiperSlide key={project.name}>
                <Link
                  to={`/projet/${project.name}`}
                  key={project.name}
                  id={project.name}
                  className="project_card"
                >
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
          <i className="fa-solid fa-chevron-right chevron"></i>
        </div>
      </div>
    </section>
  );
}
