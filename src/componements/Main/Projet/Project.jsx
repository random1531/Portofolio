import React, { act } from "react";
import { useState, useEffect } from "react";
import "./Project.css";
import ProjectCard from "./PojetCard/ProjetCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  HashNavigation,
  Navigation,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../slider.css";
import { Link } from "react-router-dom";

export default function Project() {
  const [dataProject, setDataProject] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const openModal = () => {

    setShowModal(!showModal);
  };

  useEffect(() => {
    setIndex(localStorage.getItem("index"));
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

  const handleIndex = (swiper) => {
    setIndex(swiper.activeIndex);    
    localStorage.setItem("index", swiper.activeIndex);
  };

  return (
    <section className="project" id="project">
      <div className="project_container">
        <h2 className="projet_title">Mes projet</h2>
        <div className="project_card_container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            hashNavigation={{
              watchState: true,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{ clickable: true }}
            pagination={{
              clickable: true,
            }}
            initialSlide={localStorage.getItem("index")}
            modules={[EffectCoverflow, Pagination, HashNavigation, Navigation]}
            className="mySwiper"
            onSlideChange={handleIndex}
          >
            {dataProject.map((project) => (
              <SwiperSlide key={project.name} tabIndex={2}>
                <Link
                  to={`/projet/${project.name}`}
                  key={project.name}
                  id={project.name}
                  className="project_card_link"
                >
                  <ProjectCard
                    modal={openModal}
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
