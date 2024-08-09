import logoimg from "../../assets/images/munaLogo.png";
import "../../style/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className=" footer-container">
        <div className="row row-lg-12 container ">
          <div className="footer1Info_container col-lg-3 col-md-6 col-sm-12">
            <div className="logo-icon">
              <img src={logoimg} alt="logo of company" height={64} width={64} />
            </div>
            <p className="text-light">
              Munal Education Hub Pvt.Ltd is a rising educational consultancy,
              that provides services from registered migration agents. We
              understand the value of a quality education providing institution
              and their impact on the future of a student.
            </p>
            <h5 className="text-light">Follow Us on:</h5>
            {/* <div className="Social-links"> */}
            <Link to="#" className="facebook social-links bg-primary">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="whatsapp social-links bg-success">
              <i class="bi bi-whatsapp"></i>
            </Link>
            <Link to="#" className="instagram social-links ">
              <i class="bi bi-instagram"></i>
            </Link>
            {/* </div> */}
          </div>
          <div className=" footer2-container col-lg-3 col-md-6 col-sm-12 container">
            <div className="text-light mt-3 mb-5 footer-toplink-title">
              <p className=" top h3">Top Links</p>
            </div>
            <ul className="footer-top-links">
              <li className="footer-links">
                <Link to="/about" className="top-links">
                  About Us
                </Link>
              </li>
              <li className="footer-links">
                <Link to="/service" className="top-links">
                  Services
                </Link>
              </li>
              <li className="footer-links">
                <Link to="/destination" className="top-links">
                  Destination
                </Link>
              </li>
              <li className="footer-links">
                <Link to="#" className="top-links">
                  Language Classes
                </Link>
              </li>
              <li className="footer-links">
                <Link to="/" className="top-links">
                  Gallery
                </Link>
              </li>
              <li className="footer-links">
                <Link to="/contact" className="top-links">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer3-container col-lg-3 col-md-6 col-sm-12">
            <div className="destination-title text-light mt-3 mb-5">
              <p className="destination h3">Destinations</p>
            </div>
            <ul className="footer-destination-links  ">
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in Australia
                </Link>
              </li>
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in Canada
                </Link>
              </li>
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in UK
                </Link>
              </li>
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in USA
                </Link>
              </li>
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in Denamark
                </Link>
              </li>
              <li className="footer-links">
                <Link to="" className="destination-links">
                  Study in France
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer4-container col-lg-3 col-md-6 col-sm-12">
            <div className="location-title text-light mt-3 mb-5">
              <p className="location h3">Location</p>
            </div>
            <ul className="footer-location-links text-light">
              <li className="footerLocationLinks d-flex gap-4">
                <div className="footer-icon">
                  <i class="bi bi-telephone-inbound fw-bold fs-2"></i>
                </div>
                <div className="location-links-content">
                  <Link to="tel:01-5920019" className="location-links ">
                    01-5920019
                  </Link>
                </div>
              </li>
              <li className="footerLocationLinks d-flex gap-4">
                <div className="footer-icon">
                  <i class="bi bi-envelope fw-bold fs-2"></i>
                </div>
                <div className="location-links-content footerLocationIcon ">
                  <Link
                    to="munaleducationHub@gmail.com"
                    className="location-links "
                  >
                    munaleducationhub@gmail.com
                  </Link>
                </div>
              </li>

              <li className="footerLocationLinks d-flex gap-4">
                <div className="footer-location-mail-icon footerLocationIcon fw-bold ">
                  <i class="bi bi-geo-alt fw-bold fs-2"></i>
                </div>
                <div className="location-links-content">
                  <p className=" locationInfo h7">
                    New Baneshwor, Kathmandu, Nepal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="fw-bold mt-5 mb-5">

        </hr>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12" style={{color:"#ebd7d7 "}}>
              <div className="copyright-text text-center">
                <p>
                  Copyright ©
                  <Link to="https://www.munaleduhub.com" className="munalhub-link">
                    Munal Education Hub Pvt.Ltd
                  </Link>
                  | All Right Reserved | Developed by
                  <Link to="https://prabidhienterprises.com/" className="prabidhi-link">
                    ❤️Prabidhi Enterprises
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
