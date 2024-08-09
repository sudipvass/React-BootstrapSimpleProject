import React from "react";
import aboutCardImg from "../../../../assets/images/aboutImg.jpg"
import "../about_style/about.css";
const About = () => {
  return (
    <div className=" container about-container ">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="image-wrapper">
            <img
              src={aboutCardImg}
              alt="about card"
              className="img-fluid about-card-image"
            />
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="about-item-container ">
            <div className="section-title mt-5">
              <span className="section-header">ABOUT OUR COMPANY</span>
              
              <h2 className="about-highlight-slogan ">
                Providing Genuine Guidance On Abroad Education and Career.
              </h2>
            </div>
            <p className="aboutIntro" style={{ textAlign: "justify" ,textJustify:"inter-word"}}></p>
            <p className="info">
              Munal Education Hub Pvt.Ltd is a rising educational consultancy,
              that provides services from registered migration agents. We
              understand the value of a quality education providing institution
              and their impact on the future of a student.
            </p>
            <p></p>
            <div className="about-inner-container ">
              <div className="experince-box ">
                <div className="title ">
                  <span >100%</span>
                </div>
                <div className="mt-2">
                <p className="fw-bold">
                TRUSTED <span className="trusted-span">
                   & EXPERIANCED
                  </span>
                </p>
                </div>

                
              </div>
              <div className="vr  mx-5" style={{height:"100px"}}></div>
              <div className="about-list-box ">
                <ul className="list-wrap fw-bold fs-5">
                  <li>
                    
                      <i class="bi bi-arrow-right service-arrow border rounded-circle" />
                      Abroad Studies
                   
                  </li>
                  <li>
                    
                      <i class="bi bi-arrow-right service-arrow rounded-circle" />
                      Career Guidance
                    
                  </li>
                  <li className="">
                  
                      <i class="bi bi-arrow-right service-arrow rounded-circle"></i>
                      Education
                   
                  </li>
                </ul>
              </div>
            </div>
            <hr className= "hr"></hr>
              <div className="about-bottom ">
                <div className="about-phone">
                  <div className="icon">
                  <i class="bi bi-telephone-inbound about-telephone-icon"></i>
                  </div>
                  <div className="telephone-content">
                    <span>Contact Number</span>
                    <a href="tel:01-5920019">015920019</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* <div className=""> */}
      </div>
    </div>
    // </div>
  );
};

export default About;
