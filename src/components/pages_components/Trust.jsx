import trustimg from "../../assets/images/trust.jpg";
import certifiedImg from "../../assets/images/certified.png";
import mapicon from "../../assets/images/mapicon.png";
import "../../style/trust.css";
export default function Trust() {
  return (
    <div className="trust-container d-flex justify-content-center">
      <div className="container-fluid row row-lg-12 ">
        <div className="col-lg-6 col-md-12  col-sm-12 order-0 order-lg-2 container-fluid ">
          <div className="trust-image-wrapper ">
            <img
              src={trustimg}
              alt="trust image background"
              className="img-fluid serviceimage"
            />
          </div>
        </div>
        <div className=" col-lg-6 col-md-12 col-sm-12 trust-content-container  ">
          <div className="trust-title">
            <p
              className="h5 text-uppercase "
              data-aos="fade-right"
              data-aos-duration="500"
            >
              Trusted By The Students
            </p>
          </div>
          <div className="trust-slogan d-flex  flex-wrap">
          
            <div className="first-word" data-aos = "fade-right" data-aos-duration = "100" data-aos-delay = "550">
              <p className="m-1 h1">We</p>
            </div>
            <div className="second-word" data-aos = "fade-right" data-aos-duration = "150" data-aos-delay = "600">
              <p className="m-1 h1">Offer</p>
            </div>
            <div className="third-word" data-aos = "fade-right" data-aos-duration = "200" data-aos-delay = "650">
              <p className="m-1 h1">Our</p>
            </div>
            <div className="fourth-word" data-aos = "fade-right" data-aos-duration = "250" data-aos-delay = "700">
              <p className="m-1 h1">Students </p>
            </div>
            <div className="fifth-word" data-aos = "fade-right" data-aos-duration = "300" data-aos-delay = "750">
              <p className="m-1 h1">With</p>
            </div>
            <div className="sixth-word" data-aos = "fade-right" data-aos-duration = "350" data-aos-delay = "800">
              <p className="m-1 h1">best</p>
            </div>
            <div className="seventh-word" data-aos = "fade-right" data-aos-duration = "400" data-aos-delay = "850">
              <p className="m-1 h1">Consulting</p>
            </div>
           
          </div>

          <p style={{ textAlign: "justify" }}>
            Select us for unparalleled educational consultancy. Our team
            provides personalized guidance, comprehensive support, and a
            commitment to your academic success. Trust us to transform your
            aspirations into reality and guide you toward a brighter future
          </p>
          <div className="certification-container">
            <div className="certification-content-container">
              <div className="certification-icon">
                <img
                  src={certifiedImg}
                  alt="certificate badge"
                  className="certificate-badge"
                />
              </div>

              <div className="certi-content">
                <p className="h3 certification-title">
                  Certified and Registerd Counsellors
                </p>
                <p style={{ textAlign: "justify" }}>
                  To ensure the integrity of your process, it is imperative that
                  it conforms to the established standards within the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="map-migration-container">
            <div className="map-migration-content-container">
              <div className="map-icon">
                <img src={mapicon} alt="map icon" className="map-icon" />
              </div>
              <div className="">
                <p className="h3 migration-title">
                  Accessible Education and Immigration
                </p>
                <p style={{ textAlign: "justify" }}>
                  Present all available choices for your educational or
                  migration journey conveniently and at affordable cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
