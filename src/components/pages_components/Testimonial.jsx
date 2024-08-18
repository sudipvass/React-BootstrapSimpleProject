// import ReactOwlCarousel from "react-owl-carousel";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

import OwlCarousel from "react-owl-carousel/dist/OwlCarousel";

import "../../style/testimonial.css";
export default function Testimonial() {
  const options = {
    mouseDrag: true,
    touchDrag: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: false,
    dots: true,
  };
  return (
    <div
      className="testimonial-container"
      style={{ backgroundColor: "#1c1a4a" }}
    >
      <div className="container">
        <div className="testimonial-header row justify-content-center">
          <div className="col-lg-6">
            <div className="test-header text-center mb-5">
              <span className="sub-title">Students Testimonial</span>
              <h2 className="test-title">What Our Proud Students Saying </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gutter-24">
          <div className="col-12">
            <OwlCarousel className="owl-theme" loop margin={20} {...options}>
              <div className="item">
                <div className="testimonial-card-container">
                  <div className="carimage">
                    <img src={image2} alt="testimonials" />
                  </div>
                  <div className="info d-flex flex-column justify-content-center align-items-center">
                    <h1
                      className="title"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      Lokendra Bhatta
                    </h1>
                    <h2
                     
                      style={{ fontSize: "15px", color: "#b8b9da" }}
                    >
                      Our happy Student
                    </h2>
                    <span className="mt-0 rating d-flex justify-content-center align-items-center">
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <p className="">
                    I had a really good experience with Munal Education Hub. I
                    got my visa without much efforts from my side.
                  </p>
                </div>
              </div>
              <div className="item">
              <div className="testimonial-card-container">
                  <div className="carimage " >
                    <img src={image3} alt="testimonials" />
                   
                  </div>
                  <div className="info d-flex flex-column justify-content-center align-items-center">
                    <h1
                      className="title"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      Ganga Deuba
                    </h1>
                    <h2
                     
                      style={{ fontSize: "15px", color: "#b8b9da" }}
                    >
                      Our happy Student
                    </h2>
                    <span className="mt-0 rating d-flex justify-content-center align-items-center">
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    I had a really good experience with Munal Education Hub. I
                    got my visa without much efforts from my side.
                  </p>
                </div>
              </div>
              <div className="item">
              <div className="testimonial-card-container">
                  <div className="carimage">
                    <img src={image4} alt="testimonials" />
                  </div>
                  <div className="info d-flex flex-column justify-content-center align-items-center">
                    <h1
                      className="title"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      Sandhya Shah
                    </h1>
                    <h2
                     
                      style={{ fontSize: "15px", color: "#b8b9da" }}
                    >
                      Our happy Student
                    </h2>
                    <span className="mt-0 rating d-flex justify-content-center align-items-center">
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    I had a really good experience with Munal Education Hub. I
                    got my visa without much efforts from my side.
                  </p>
                </div>
              </div>
              <div className="item">
              <div className="testimonial-card-container">
                  <div className="carimage">
                    <img src={image1} alt="testimonials" />
                  </div>
                  <div className="info d-flex flex-column justify-content-center align-items-center">
                    <h1
                      className="title"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      Anil Bhandari
                    </h1>
                    <h2
                     
                      style={{ fontSize: "15px", color: "#b8b9da" }}
                    >
                      Our happy Student
                    </h2>
                    <span className="mt-0 rating d-flex justify-content-center align-items-center">
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#ee5d0e", fontSize: "18px" }}
                      ></i>
                      <i class="bi bi-star-fill"></i>
                    </span>
                  </div>
                  <p>
                    I had a really good experience with Munal Education Hub. I
                    got my visa without much efforts from my side.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
