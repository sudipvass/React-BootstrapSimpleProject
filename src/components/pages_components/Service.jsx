import React, { useEffect } from "react";
import "../../style/service.css";
import serviceIcon from "../../assets/images/talk_icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const serviceCard = document.querySelectorAll(".service-item-container");
    serviceCard.forEach((card) => {
      card.addEventListener("mouseover", () => {
        const flipicon = card.querySelector(".service-icon img");
        flipicon.classList.add("flip-animation");
        setTimeout(() => {
          flipicon.classList.remove("flip-animation");
        }, 1000);
      });
    });
  }, []);
  return (
    <div className="  service-container  ">
      <div className="container">
        <div className="service-header " data-aos="fade-right">
          <h5 className="service-section-title">Featured Services </h5>
          <div>
            <h1 className="text-light fw-bold">Discover Our Service</h1>
          </div>
        </div>
        <div className="  row justify-content-center gutter-24 service-box-tem-container">
          <div className="col-lg-4 col-md-12  service-item-container ">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img
                    src={serviceIcon}
                    alt="service icon"
                    data-aos-duration="1000"
                  />
                </div>
                <div class="vr"></div>
                <div className="service-title-two ">
              
                  <h2 className="servtitle">
                    <a href="#">Documentaion Assistance</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub assist with a variety of do...</p>
                <a
                  className="btn btn-outline btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 service-item-container ">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>
                <div className="service-title-two">
                  <h2 className="servtitle">
                    <a href="#">Finance Management</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub assist in finance managemen...</p>
                <a
                  className="btn btn-outline btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 service-item-container ">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>
                <div className="service-title-two">
                  <h2 className="servtitle">
                    <a href="#">Language Preparation</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub assist with language prepar...</p>
                <a
                  className="btn btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 service-item-container">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>
                <div className="service-title-two">
                  <h2 className="servtitle">
                    <a href="#">Meet Us Online</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub have website where you can...</p>
                <a
                  className="btn btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 service-item-container">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>
                <div className="service-title-two">
                  <h2 className="servtitle">
                    <a href="#">Student Accomodation</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub assist students in finding...</p>
                <a
                  className="btn btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12  service-item-container ">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>
                <div className="service-title-two ">
                  <h2 className="servtitle">
                    <a href="#">Student Visa Service</a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub provide comprehensive suppo...</p>
                <a
                  className="btn btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12  service-item-container ">
            <div className="serv-container">
              <div className="service-item-top">
                <div className="service-icon">
                  <img src={serviceIcon} alt="service icon" />
                </div>

                <div className="service-title-two">
                  <h2 className="servtitle">
                    <a href="#">Admission Counselling </a>
                  </h2>
                </div>
              </div>
              <div className="service-item-bottom">
                <p>Munal Education Hub provide personalized admiss...</p>
                <a
                  className="btn btn-two"
                  href="https://www.munaleduhub.com/service"
                >
                  Read More <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-section-bottom text-center">
          <a role="button" className="btn  service-button">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
